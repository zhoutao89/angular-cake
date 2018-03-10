import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myorder',
  templateUrl: './myorder.component.html',
  styleUrls: ['./myorder.component.scss']
})
export class MyorderComponent implements OnInit {
    heightlight1:boolean = false;
    heightlight2:boolean = false;
    constructor() { }

    ngOnInit() {
    
    }
    
    addBorder1(){
        this.heightlight2 = false;
        this.heightlight1 = true;
    }
    
    addBorder2(){
        this.heightlight1 = false;
        this.heightlight2 = true;
    }

}
