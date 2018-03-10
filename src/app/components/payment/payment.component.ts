import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import $ from '../../utlis/httpclient';
import{ Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
    msg:string = '付款成功';
    occupy:boolean = true;
    orderid:number = null;
    constructor(private http: Http,private router: Router,private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(queryParams => {  
            let orderid = queryParams.orderid;
            console.log(orderid);
            this.orderid = orderid;
        });
        
        setTimeout(()=>{
            this.occupy = false;
            let params;
            $.get(this.http,'changestatus',params = {orderid:this.orderid}).then((res)=>{
                console.log(res);
                this.router.navigate(['myorder/complete']);
            })
        },2000)
    }

}
