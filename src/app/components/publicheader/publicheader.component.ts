import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
@Component({
    selector: 'app-publicheader',
    templateUrl: './publicheader.component.html',
    styleUrls: ['./publicheader.component.scss']
})
export class PublicheaderComponent implements OnInit {
    num:Number = 0;
    iconfont:String = "icon ion-android-menu";
    constructor(private http : Http) { }

    ngOnInit() {

    }

    menu(event){
        let box = event.path[5];
        let show = box.querySelector('div.shows')
        if(this.num==0){
            this.iconfont="icon ion-ios-close-outline";
            show.style.display="block";
            this.num=1;
        }else{
            this.iconfont="icon ion-android-menu";
            show.style.display="none";
            this.num=0;
        }
        console.log(11)
    }

}
