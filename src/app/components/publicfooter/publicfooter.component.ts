import { Component, OnInit } from '@angular/core';
import $ from '../../utlis/httpclient';
import { Http } from "@angular/http";

@Component({
    selector: 'app-publicfooter',
    templateUrl: './publicfooter.component.html',
    styleUrls: ['./publicfooter.component.scss']
})



export class PublicfooterComponent implements OnInit {

    constructor(private http: Http) { }
    data:Array<any>=[];
    index:String='0';
    ngOnInit() {
        this.http.get('../../../assets/json/footer.json').subscribe((res) => {
            //console.log(res.json().footer);
            this.data=res.json().footer;
        });
    }

    target(event){
        let pathname = event.path[11].location.pathname.slice(1);

        let url = location.href; 
        if(url.indexOf(pathname)>=0){
            console.log(pathname);
        }
       
    }

    color(event){
        //console.log(event.path[1])
        let ul = event.path[2];
        let lis = ul.children;

        for(let i=0;i<lis.length;i++){
            lis[i].class=""
        }
        event.path[1].className="active";
        console.log(222);


    }
    

}
