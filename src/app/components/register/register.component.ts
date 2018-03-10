import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import $ from '../../utlis/httpclient';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    occupy: boolean;
    msg:string = '用户名已被占用';
    
    constructor(private http: Http,privateelementRef: ElementRef,private router: Router) {}
    

    ngOnInit() {

    }
    
//  ngAfterViewInit() {
//      let box = document.getElementById("box");  //获取id为‘box'的节点
//      console.log(box);
//  }
    
    
    checkUsername(_username){
//      console.log(_username);
        let reg = /^1[34578]\d{9}$/i;
        if(_username.trim() == ''){
            this.occupy = true;
            this.msg = '用户名不能为空';
        }
        else if(!reg.test(_username)){
            this.occupy = true;
            this.msg = '请输入有效的手机号';
        }
        else{
            let params;
            $.get(this.http,'user',params = {username:_username}).then((res)=>{
//              console.log(res['type']);
                if(res['type'] == 'yes'){
                    this.occupy = false;
                }
                else if(res['type'] == 'no'){
                    this.occupy = true;
                    this.msg = '用户名已经被占用';
                }
            })
        }  
    }
    
    close(){
        this.occupy = false;
    }
    
    
    signIn(_username,_password){
//      console.log(_username,_password);
        let reg = /^\S{6,20}$/;
        if(_username.trim() == '' || _password.trim() == ''){
            this.occupy = true;
            this.msg = '用户名和密码不能为空';
            return false;
        }
        else if(!reg.test(_password)){
            this.occupy = true;
            this.msg = '密码格式不合法';
            return false;
        }
        else{
            let params;
            $.get(this.http,'baocunuser',params = {username:_username,password:_password}).then((res)=>{
                if(res['status']){
                    this.occupy = true;
                    this.msg = '恭喜你注册成功';
                    setTimeout(()=>{
                        this.occupy = false;
//                      document.getElementById('username').value = '';
//                      document.getElementById('password').value = '';
                        this.router.navigate(['login']);
                    },2000)
                }
            })
        }
    }
    
}
