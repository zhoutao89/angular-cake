import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import $ from '../../utlis/httpclient';
@Component({
    selector: 'app-cakelist',
    templateUrl: './cakelist.component.html',
    styleUrls: ['./cakelist.component.scss']
})
export class CakelistComponent implements OnInit {
    constructor(private http: Http) { }

    type:Array<any>=[];
    url:Array<any>=[];
    currentIdx:String="0";


    ngOnInit() {
        this.http.get('../../../assets/json/type.json').subscribe((res) => {
            this.type = res.json().type;
            this.url = res.json().type;
        });
    }

    target(idx){
        this.currentIdx=idx;
    }

}
