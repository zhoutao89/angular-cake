import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import $ from '../../utlis/httpclient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss']
})
export class SettingComponent implements OnInit {
    username:string = null;
    gender:string = null;
    nickname:string = null;
    birthday:string = null;
    email:string = null;
    area:string = null;
    hobby:string = null;
    
    occupy:boolean = false;
    msg:string = '';
    
    
    constructor(private router: Router,private http: Http) { }

    ngOnInit() {
        let data = sessionStorage.getItem("username") || '';
        
//      console.log(data);
        this.username = data;
    }
    
    out(){
//      let data = sessionStorage.getItem("username") || '';
//      console.log(data);
        this.router.navigate(['login']);
        sessionStorage.removeItem("username");
    }
    
    changePassword(){
        this.router.navigate(['changepassword']);
    }
    
    //获取性别
    getGender(e){
//      console.log(e.target.value);
        this.gender = e.target.value;
    }
    
    //保存用户资料
    saveInfo(){
        let params;
        $.get(this.http,'changeuser',params = {username:this.username,gender:this.gender,nickname:this.nickname,birthday:this.birthday,email:this.email,area:this.area,hobby:this.hobby}).then((res)=>{
            console.log(res);
            if(res['status']){
               this.occupy = true;
               this.msg = '保存成功';
            }
//          if(res.status){
//              let params;
//              $.get(this.http,'getinfo',params = {username:this.username}).then((result)=>{
//                  console.log(result);
//                  this.nickname = result.data.results.nickname;
//                  this.birthday = result.data.results.birthday;
//                  this.email = result.data.results.email;
//                  this.area = result.data.results.area;
//                  this.hobby = result.data.results.hobby;
//              })
//          }
        })
    }
    
    close(){
        this.occupy = false;
    }
    
    
}