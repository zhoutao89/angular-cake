import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {Http} from '@angular/http';
import $ from '../../utlis/httpclient'


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  name: string = null;
  city: string = null;
  phone: string = null;
  address: string = null;
  
  house: string = null;




  constructor(private http: Http,private router:Router){}

  ngOnInit() {
  }

  save(){
   
        let phonenumber = sessionStorage.getItem("username");
        console.log(phonenumber);

        let params;

        $.get(this.http, 'idsearch',params = {phonenumber:phonenumber,name:this.name,phone:this.phone,address:this.address,house:this.house,city:this.city}).then((res) => {
                
                this.router.navigate(['order'],{queryParams:{type:'1'}});

        })
    
  }

}
