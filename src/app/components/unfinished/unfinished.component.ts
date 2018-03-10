import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import $ from '../../utlis/httpclient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unfinished',
  templateUrl: './unfinished.component.html',
  styleUrls: ['./unfinished.component.scss']
})
export class UnfinishedComponent implements OnInit {
    msg:string = null;
    occupy:boolean = false;
    
    data:Array<any> = [];
    dataset:Array<any> = [];
    orderid:number = null;
    imgurl:string = null;
    sta:string = null;
    qty:number = null;
    price:number = null;
    total:number = null;
    
    useraddress:Array<any> = [];
    
    
    
    constructor(private http: Http,private router: Router) { }

    ngOnInit() {
        $.get(this.http,'orderlist').then((res)=>{
//          console.log(res['data']['results']);
            this.data = res['data']['results'];
            var _res = res['data']['results'];
            var goodsList = [];
            for(var i = 0;i<_res.length;i++){
                goodsList.push(JSON.parse(_res[i].goods));
            }
//          console.log(goodsList);
            this.dataset = goodsList;
        })
        
        //加的部分  请求用户的地址
        let data = sessionStorage.getItem("username") || '';
        let params;
        $.get(this.http,'getaddress',params = {username:data}).then((res)=>{
            console.log(res);
            this.useraddress = res['data']['results'];
        });
    }
    
    trackById(item){
        return item.id;
    }
    
    cl(){
        this.router.navigate(['mine']);
    }
    
    goPay(_id){
        console.log(this.data[_id]['orderid']);
        if(this.data[_id]['orderid']){
            this.router.navigate(['payment'],{
                queryParams:{orderid:this.data[_id]['orderid']}
            });
        }
//      let params;
//      $.get(this.http,'changestatus',params = {orderid:_id}).then((res)=>{
//          console.log(res);
//          this.router.navigate(['complete']);
//      })
    }
    
    cancle(_id){
//      console.log(this.data[_id]['orderid']);
        let params;
        $.get(this.http,'deleteorderlist',params = {orderid:this.data[_id]['orderid']}).then((res)=>{
            console.log(res);
            if(res['status']){
                
                $.get(this.http,'orderlist').then((res)=>{
        //          console.log(res['data']['results']);
                    this.data = res['data']['results'];
                    var _res = res['data']['results'];
                    var goodsList = [];
                    for(var i = 0;i<_res.length;i++){
                        goodsList.push(JSON.parse(_res[i].goods));
                    }
        //          console.log(goodsList);
                    this.dataset = goodsList;
                })
                
                this.occupy = true;
                this.msg = '该订单已成功删除';
                setTimeout(()=>{
                    this.occupy = false;
                },2000)
            }
        })
    }
}
