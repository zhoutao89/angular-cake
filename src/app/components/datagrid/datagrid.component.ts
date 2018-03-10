import { Component, OnInit, Input } from '@angular/core';
import http from '../../utlis/httpclient';
import { Http } from '@angular/http';
import * as $ from 'jquery';
import { Router } from '@angular/router';

@Component({
    selector: 'datagrid',
    templateUrl: './datagrid.component.html',
    styleUrls: ['./datagrid.component.scss']
})
export class DatagridComponent implements OnInit {

    constructor(private http:Http,private router:Router) { }
    cakeclassify:Array<any>=[];
    @Input() test:String;
    ngOnInit() {
        http.get(this.http,this.test).then(res=>{
            let data = res['data'].results;
            this.cakeclassify=data;
            
        })
        //   清除loading
        window.setTimeout(function(){
            document.getElementById('loadingImg').style.display = 'none';
            console.log('关闭loading')
        },200)
        
    }


    buycar(event,obj){
        let body = event.path[11];
        // console.log(obj);

        if(obj.type=="dangao"){
            let routers = this.router;
            let $div = $('<div/>');
            $div.html(`
                <h2 class="title" style="padding:20px;color:#FF9326;font-weight: bold;">￥${obj.price}</h2>
                <ul style="padding:30px;overflow:hidden">
                    <li style="width:50%;float:left;line-height:40px;position:relative;padding-left:30px;"><i class="ion-cube" style="position:absolute;top:0;left:0;"></i>${obj.canju.split('，')[0]}</li>
                    <li style="width:50%;float:left;line-height:40px;position:relative;padding-left:30px;"><i class="ion-person-stalker" style="position:absolute;top:0;left:0;"></i>${obj.guige.split('，')[0]}</li>
                    <li style="width:50%;float:left;line-height:40px;position:relative;padding-left:30px;"><i class="ion-fork" style="position:absolute;top:0;left:0;"></i>${obj.peoplenumber.split('，')[0]}</li>
                    <li style="width:50%;float:left;line-height:40px;position:relative;padding-left:30px;"><i class="ion-clock" style="position:absolute;top:0;left:0;"></i>${obj.changjing}</li>
                </ul>
                <img src="${obj.imgurl}" style="width:100%"/>
                <button style="width:200px;height:60px;display:block;margin:20px auto;text-align:center;font-size:24px;border-radius:20px;background:#FF9326;">加入购物车</button>
                <i class="icon ion-ios-close-outline" style="position:absolute;top:14px;right:20px;font-size:30px;color:#000;"></i>
            `);

            $(body).append($div);
            //console.log('wslkjf')
            $div.find('button').on('click',function(){
                console.log(http);

                let params;
                // 判断是否登录
                let _username = sessionStorage.getItem('username');
                console.log(_username);
                if(_username){
                    
                    $div.remove();
                    let $test = $('<p/>');
                    $test.html('以成功加入').appendTo($('body'));
                    $test.css({
                        position:'fixed',
                        zIndex:200,
                        top:'50%',
                        left:'50%',
                        transform:'translate(-50%,-50%)',
                        background:'#ddd',
                        height:'100',
                        width:'400',
                        borderRadius:'30px',
                        textAlign:'center',
                        fontSize:30,
                        lineHeight:'100px',
                        opcity:'0.4'
                    })

                    setTimeout(function(){
                        $test.remove();
                    },1500);


                   }else{

                    $div.remove();
                    let $test = $('<p/>');
                    $test.html('请先注册').appendTo($('body'));
                    $test.css({
                        position:'fixed',
                        zIndex:200,
                        top:'50%',
                        left:'50%',
                        transform:'translate(-50%,-50%)',
                        background:'#ddd',
                        height:'100',
                        width:'400',
                        borderRadius:'30px',
                        textAlign:'center',
                        fontSize:30,
                        lineHeight:'100px',
                        opcity:'0.4'
                    })

                    setTimeout(function(){
                        $test.remove();
                        routers.navigate(['register'])
                    },1500);

                }

            })
            $div.css({
                "position":"fixed",
                "z-index":"100",
                "width":"80%",
                "font-size":"26px",
                "background":"rgb(248, 247, 246)",
                "top":"50%",
                "left":"50%",
                "transform":"translate(-50%, -50%)",
                "border-radius": ".4rem",
                "box-shadow":"0 0 .666667rem .16rem #eaeaea",
            })

            $('.ion-ios-close-outline').on('click',function(){
                let $parent = $('.ion-ios-close-outline').parent('div');
                $parent.remove();
                //console.log($parent)
            })

        }else{
            let tag = event.target;
            let $left = $(tag).offset().left;
            let $top = $(tag).offset().top;
            let h = $(window).height()-90;
            let w = $(window).width()/2;
            

            let $car = $('<p/>').appendTo($('body'))
            $car.css({
                'position':'absolute',
                'left':$left,
                'top':$top,
                'height':12,
                'width':12,
                'borderRadius':'50%',
                'background':'#000'
            });

            $car.animate({
                left: w, top: h, opacity: 'show'
            }, function(){
                $car.remove();
            });
        }
    }

    

    detail(event,obj){
        if(event.target.tagName=='IMG'){
            //console.log(event,obj);
            let id = obj.id;
            this.router.navigate(['detail'],{ queryParams: { id: id } }); 
        }
    }

}
