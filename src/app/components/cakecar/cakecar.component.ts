import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Component, OnInit, Input} from '@angular/core';
import {Http} from '@angular/http';
import $ from '../../utlis/httpclient'

@Component({
  selector: 'app-cakecar',
  templateUrl: './cakecar.component.html',
  styleUrls: ['./cakecar.component.scss']
})
export class CakecarComponent implements OnInit {
  dataset: Array<any> = null;
  datalist: Array<any> = null;
  i:number;
  totalPrice :number = 0;
  sta:number = 1;
  len:Array<number> = [];

  constructor(private http: Http,private router:Router){}

  ngOnInit() {
        let _username = sessionStorage.getItem("username");
        let params;
        $.get(this.http, 'username',params = {username:_username}).then((res) => {
                
                this.dataset = res['data']['results'];
                for(this.i=0;this.i<this.dataset.length;this.i++){
                   
                    
                     this.totalPrice = (this.dataset[this.i].price)*(this.dataset[this.i].qty);
                    

                }
                console.log(this.len);
                 console.log(this.sta);
                for(let i=0;i<this.dataset.length;i++){
                    this.len.push(this.sta);
                }



        })
        let phonenumber = sessionStorage.getItem("username");

        
        $.get(this.http, 'detapage').then((res) => {
                
                this.datalist = res['data']['results'].slice(0,5);
                console.log(this.datalist);

        })
            
  }

  getKeys(item){
        return Object.keys(item);
  }

  self(_id){
       
//              console.log(666);
//              console.log(_id);
                this.router.navigate(['detail'],{queryParams:{id:_id}});

        
  }

  del(_carid){
        
        
//      console.log(_carid);
        let _username = sessionStorage.getItem("username");
        let params;
        $.get(this.http, 'deletecarlist',params = {carid:_carid}).then((res) => {
                
                 $.get(this.http, 'username',params = {username:_username}).then((res) => {
                
                this.dataset = res['data']['results'];
                

                })
                 
                  

        })
  }


  car(_id){


        
        console.log(_id);

        let _username = sessionStorage.getItem("username");
        console.log(_username);

        let params;
        if(_username){
            $.get(this.http, 'addcar',params = {username:_username,id:_id}).then((res) => {
                
                $.get(this.http, 'username',params = {username:_username}).then((res) => {
                
                this.dataset = res['data']['results'];
                

                })

            })
        }else{
              this.router.navigateByUrl('login');
        }
        
  }

  jian(idx,_id){
        console.log(idx);
        this.len[idx]-=1;
        if(this.len[idx] <= 1){
            this.len[idx]=1;
        }
        let target = event.target;
        
        
        
        let _username = sessionStorage.getItem("username");
        let params;
        $.get(this.http, 'changeqty',params = {qty:this.len[idx],carid:_id}).then((res) => {
                
             $.get(this.http, 'username',params = {username:_username}).then((res) => {
                
                this.dataset = res['data']['results'];
                for(this.i=0;this.i<this.dataset.length;this.i++){
                   
                    
                     this.totalPrice = (this.dataset[this.i].price)*(this.dataset[this.i].qty);
                    

                }
                



                })   

        })
        
  }

  zeng(idx,_id){
        this.len[idx]+=1;
        let target = event.target;
        
        
        
        let _username = sessionStorage.getItem("username");
        let params;
        $.get(this.http, 'changeqty',params = {qty:this.len[idx],carid:_id}).then((res) => {
                
               $.get(this.http, 'username',params = {username:_username}).then((res) => {
                
                this.dataset = res['data']['results'];
                for(this.i=0;this.i<this.dataset.length;this.i++){
                   
                    
                     this.totalPrice = (this.dataset[this.i].price)*(this.dataset[this.i].qty);
                    console.log(this.dataset[this.i].qty)
                    console.log(this.dataset[this.i].price)
                     console.log(this.totalPrice);

                }
                



                }) 

        })
  }

}
