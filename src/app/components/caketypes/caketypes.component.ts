import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import $ from '../../utlis/httpclient';
import {Router} from '@angular/router'

@Component({
  selector: 'app-caketypes',
  templateUrl: './caketypes.component.html',
  styleUrls: ['./caketypes.component.css']
})
export class CaketypesComponent implements OnInit {
  type:String = '';
  changjingName:String = '';
  constructor(private http:Http) { }

  ngOnInit() {
    let params = decodeURI(location.search.slice(1).split('=')[1]);
    this.type = 'changjing?type=' + params;
    this.changjingName = params;
    console.log(this.type)
    // $.get(this.http,'changjing',params={type:this.type}).then((res)=>{
    //   console.log(res);
    // })

  }
  goBackPage(){
    history.back(-1);
  }

}
