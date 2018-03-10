import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.css']
})
export class CommunityComponent implements OnInit {
  zhikeShow:boolean = true;
  shudongShow:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  zhikePageShow(){
    this.zhikeShow = true;
    this.shudongShow = false;
  }

  shudongPageShow(){
    this.zhikeShow = false;
    this.shudongShow = true;
  }


}
