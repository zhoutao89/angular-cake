import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import http  from '../../utlis/httpclient';
import { Router } from '@angular/router';
import * as $ from 'jquery';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
    moodsData:Array<any> = [];
    yearData:Array<any> = [];
    constructor(private http: Http,private router:Router) { }


    ngOnInit(){
        http.get(this.http,'detapage').then((res)=>{
            let resData = res['data'].results;
            this.moodsData=resData.slice('0','8');
            this.yearData=resData.slice(20,30);
            console.log(this.moodsData);
        }) 

        


        let $swiper = $('.swiper');
        let $ul = $swiper.find('ul');
        let $imgs = $swiper.find('.img');
        let $imgWidth = $(window).width();
        let $len = $imgs.length;
        let $ulWidth = $len*$imgWidth;
        console.log($imgs,$len,$ul);
        $ul.css({
            'width':$ulWidth
        })
        
        $imgs.css({
            'width':$imgWidth,
            'float':'left'
        })

            
        

        let num = 0;
        setInterval(function(){
            if(num>=$len-1){
                num=0;
            }
            num++
            $ul.animate({
                'left':-$imgWidth*num

            },50)
        },3000);


    }

    trackById(item){
        return item.id;
    }

    car(event){
        let car = event.target;
        if(car.tagName=='I' && car.className=='icon ion-ios-cart-outline'){
            let id = event.path[2].id
            console.log(id);
        }else if(car.tagName=='IMG'){
            let id = event.path[1].id
            console.log(id)
            this.router.navigate(['detail'],{ queryParams: { id: id } }); 
        }
    }

}
