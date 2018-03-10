import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import $ from '../../utlis/httpclient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.scss']
})
export class MineComponent implements OnInit {
    user:string = '登录/注册';
    changecolor:boolean = false;
    
    constructor(private http: Http,private router: Router) { }

    ngOnInit() {
        let data = sessionStorage.getItem("username") || '';
//      console.log(data);
        if(data){
            this.user = data;
            this.changecolor = true;
        }else{
            this.user = '登录/注册';
        }
    }
    
    setting(){
        if(this.user == '登录/注册'){
            this.router.navigate(['login']);
        }else{
            this.router.navigate(['setting']);
        }
    }
    
    gomyorder(){
        let data = sessionStorage.getItem("username") || '';
        if(data){
            this.router.navigate(['myorder']);
        }else{
//          this.router.navigate(['login']);
            this.router.navigate(['login'],{
                queryParams:{way:'myorder'}
            });
        }
    }
    
    goaddress(){
        let data = sessionStorage.getItem("username") || '';
        if(data){
            this.router.navigate(['myaddress']);
        }else{
//          this.router.navigate(['login']);

            this.router.navigate(['login'],{
                queryParams:{way:'myaddress'}
            });
        }
    }

}
