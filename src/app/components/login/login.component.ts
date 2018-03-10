import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import $ from '../../utlis/httpclient';
import{ Router, ActivatedRoute, Params } from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
	occupy: boolean;
    msg:string = '用户名已被占用';
    type:string = '';
	
	constructor(private http: Http,private router: Router,private activatedRoute: ActivatedRoute) {}
	
	ngOnInit() {
	    this.activatedRoute.queryParams.subscribe(queryParams => {  
            let way = queryParams.way;
//          console.log(way);
            this.type = way;
        });
	}
	
	loginIn(_username,_password){
//	    console.log(_username,_password);
        if(_username.trim() == '' || _password.trim() == ''){
            this.occupy = true;
            this.msg = '用户名和密码不能为空';
            return false;
        }else{
            let params;
            $.get(this.http,'checkuser',params = {username:_username,password:_password}).then((res)=>{
//              console.log(res);
//              console.log(res['type']);
                if(res['type'] == 0){
                    this.occupy = true;
                    this.msg = '用户名或密码错误';
                    return false;
                }
                else if(res['type'] == 1){
                    this.occupy = true;
                    this.msg = '登录成功,即将为您跳转';
                    sessionStorage.setItem("username",_username);
                    sessionStorage.setItem("password",_password);
//                  let data = sessionStorage.getItem("username");
//                  console.log(data);
                    setTimeout(()=>{
                        this.occupy = false;
                        this.router.navigate(['home']);
                        
                        if(this.type == 'myaddress'){
                            this.router.navigate(['myaddress']);
                        }
                        else if(this.type == 'myorder'){
                            this.router.navigate(['myorder']);
                        }else{
                            this.router.navigate(['home']);
                        }
                    },2000)
                }
            })
        }
        
	}
	
	close(){
        this.occupy = false;
    }
	
//	toRegister(){
//	    console.log('没有帐号就跳到注册');
//	}
}