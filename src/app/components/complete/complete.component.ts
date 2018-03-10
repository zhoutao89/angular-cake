import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import $ from '../../utlis/httpclient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {
    dataset:Array<any> = [];
    data:Array<any> = [];
    orderid:number = null;
    imgurl:string = null;
    sta:string = null;
    qty:number = null;
    price:number = null;
    total:number = null;
    

    
    constructor(private http: Http,private router: Router) { }

    ngOnInit() {
        $.get(this.http,'complete').then((res)=>{
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
    }
    
    trackById(item){
        return item.id;
    }
    
    cl(){
        this.router.navigate(['mine']);
    }

}
