import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import $ from '../../utlis/httpclient'

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
   orderlist: Array<any> = null; 
   user:string = null;
   address:Array<any> = null;
   status1:boolean ;
   status2:boolean ;
   i:number;
   totalPrice :number = 0;
   time:string = null;

  constructor(private http: Http,private router:Router,private activatedRoute: ActivatedRoute){}

  ngOnInit() {
            let params;
            let _username = sessionStorage.getItem("username");
            $.get(this.http, 'username',params = {username:_username}).then((res) => {
                
                this.orderlist = res['data']['results'];
                console.log(this.orderlist);
                
                for(this.i=0;this.i<this.orderlist.length;this.i++){
                    console.log(this.orderlist[this.i].price);
                    
                     this.totalPrice += (this.orderlist[this.i].price)*(this.orderlist[this.i].qty);
                    console.log(this.totalPrice);

                }

                


            })

             this.activatedRoute.queryParams.subscribe(queryParams => {  
                let type = queryParams.type;  
                console.log(type);

                if( type === '1'){
                    this.user = "更换"
                }else{
                    this.user = "增加收货地址"
                }


            });  
            
           

            


  }

  buy(){
            let params;
            $.get(this.http, 'orderlistadd',params = {goods:JSON.stringify(this.orderlist),delivertime:this.time,total:this.totalPrice}).then((res) => {
                
               
        })
  }

}
