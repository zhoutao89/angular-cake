import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http'
import $s from '../../utlis/httpclient';
import {Router} from '@angular/router'

@Component({
  selector: 'app-cakedetail',
  templateUrl: './cakedetail.component.html',
  styleUrls: ['./cakedetail.component.css']
})
export class CakedetailComponent implements OnInit {
  cakeId:String;
  cakes:Object;
  cakesRecom:Array<any> = [];
  cakesPrice:String = '';
  cakesPriceB:Array<any> = [];
  cnName:String = '';
  enName:String = '';
  cakesSweet:Array<number> = [];
  cakaesSweetNo:Array<number> = [];
  detailImgurl:String = '';
  detailImg1:String = '';
  detailImg2:String = '';
  detailImg3:String = '';
  detailImgA:String = '';
  detailImgB:String = '';
  detailImgC:String = '';
  chicunImg:Array<any> = ['./assets/img/13_img.jpg','./assets/img/17_img.jpg','./assets/img/23_img.jpg','./assets/img/30_img.jpg'];
  guige:Array<any> =  [];
  peoplenumber:Array<any> = [];
  canju:Array<any> = [];
  chicun:Array<any> = [];

  // 当前选择的尺寸对应信息
  currentPrice:String = '';
  currentguige:String = '';
  currentpeoplenumver:String = '';
  currentcanju:String = '';
  currentchicun:String = '';
  currentChicunImg:String = ''; 

  // 选择尺寸加选中边框
  guigeId:number = 1;

  // 对应用户购物车数量
  cartNumber:Number = 0;

  constructor(private http:Http ,private router:Router) { }

  ngOnInit() {

    this.cakeId = location.search.slice(1).split('=')[1];
    let params;
    
    $s.get(this.http , 'detaid' , params = {id : this.cakeId}).then((res)=>{
      this.cakes = res['data'].results[0];
      console.log(this.cakes,res);

      // 处理数据
      this.cakesRecom = this.cakes['changjing'] ? this.cakes['changjing'].split(">").slice(0,this.cakes['changjing'].split(">").length-1) : [];
      this.cakesPrice = this.cakes['price'] || '';
      this.cnName = this.cakes['ChinaName'] || '';
      this.enName = this.cakes['EnglishName'] || '';
      this.detailImgurl = this.cakes['imgurl'] || '';
      this.detailImg1 = this.cakes['detailImg1'] || '';
      this.detailImg2 = this.cakes['detailImg2'] || '';
      this.detailImg3 = this.cakes['detailImg3'] || '';
      this.detailImgA = this.cakes['detailImgA'] || '';
      this.detailImgB = this.cakes['detailImgB'] || '';
      this.detailImgC = this.cakes['detailImgC'] || '';
      this.guige = this.cakes['guige'] ? this.cakes['guige'].split('，') : [];
      this.peoplenumber = this.cakes['peoplenumber'] ? this.cakes['peoplenumber'].split('，') : [];
      this.canju =  this.cakes['canju'] ? this.cakes['canju'].split('，') : []; 
      this.chicun = this.cakes['chicun'] ? this.cakes['chicun'].split(',') : [];  
      this.cakesPriceB = this.cakes['priceB'] ? this.cakes['priceB'].split(',') : [];   

      console.log(this.guige, this.peoplenumber,this.canju,this.chicun,this.cakesPriceB);

      // 甜度动态生成
      for(let i = 0; i< this.cakes['tiandu'] ;i++){
        this.cakesSweet.push(i);
      }
      for(let j = 0 ; j < (5-this.cakes['tiandu']) ;j++){
        this.cakaesSweetNo.push(j);
      }

      // 默认选择尺寸为2磅的对应信息赋值
      this.currentPrice = this.cakesPriceB[1] ? this.cakesPriceB[1] : this.cakesPriceB[0];
      this.currentguige =  this.guige[1];
      this.currentpeoplenumver = this.peoplenumber[1];
      this.currentcanju = this.canju[1];
      this.currentchicun = this.chicun[1];
	  this.currentChicunImg = this.chicunImg[1];
	  
	//   清除loading
	window.setTimeout(function(){
		document.getElementById('loadingImg').style.display = 'none';
		console.log('关闭loading')
	},200)

  })
  
  // 获取当前用户购物车商品数量
  let _username = sessionStorage.getItem('username');
  if(_username){
    $s.get(this.http , 'username' , params = {username : _username}).then((results)=>{
      console.log(results['data']['results'])
      this.cartNumber = results['data']['results'].length;
    })
  }else{
    console.log('没登录');
  }
	
    
  }

  getKeys(_item){
    return Object.keys(_item);
  }
  // 点击返回上一页
  goBackPage(){
    history.go(-1);
  }

  // 选择尺寸改变当前信息与所选尺寸对应
  selectGuige(_idx){
    this.guigeId = _idx;
    // console.log(_idx);
    this.currentPrice = this.cakesPriceB[_idx];
    this.currentguige =  this.guige[_idx];
    this.currentpeoplenumver = this.peoplenumber[_idx];
    this.currentcanju = this.canju[_idx];
    this.currentchicun = this.chicun[_idx];
    this.currentChicunImg = this.chicunImg[_idx];
  }
  // 立即购买商品信息写入购物车并跳转到购物车页面
  addToCar(){
    // console.log(this.currentPrice,this.currentguige);
	let params;
	// 判断是否登录
	let _username = sessionStorage.getItem('username');
	if(_username){
    $s.post(this.http , 'carlistadd' , params =
     {chinaName : this.cnName, EnglishName :this.enName,price:this.currentPrice,
      imgurl: this.detailImgurl,sta:this.currentguige,username:_username}).then((res)=>{
			console.log(res);
            if(res['_body'] == 'ok'){
                $('#buyModal').modal('hide').on('hidden.bs.modal',
                ()=> {
                    // 跳转路由
                    this.router.navigateByUrl('cakecar')
                })
            }else{
				console.log('购买失败')
			}
		})
	}else{
		$('#buyModal').modal('hide').on('hidden.bs.modal',
			()=> {
				// 跳转路由
				this.router.navigateByUrl('login')
			})
	}
  }

  flyToCar(){
	var domAddToCart = document.getElementById('addToCart');  
	var domShopCart = document.getElementById('shopCart');  
	// 起始位置
	var nStartX = domAddToCart.offsetLeft + 100,  
	nStartY = domAddToCart.offsetTop - document.body.scrollTop,  
	// 终点位置
	// nEndX = domShopCart.offsetLeft,  
	// nEndY = domShopCart.offsetTop,  
	nEndX = 40,  
	nEndY = nStartY+30,

	nTopX = nEndX - 10,  
	nTopY = nEndY - 8;  
	// 开始的位置
	// console.log(nStartX,nStartY)
	// console.log(nEndX,nEndY)
	// console.log(nTopX,nTopY)
	
	var x = nStartX,y = nStartY;  

	

	  
	//   把商品写入购物车
	// this.addToCar();
	let params;
	// 判断是否登录
	let _username = sessionStorage.getItem('username');
	if(_username){
		$s.post(this.http , 'carlistadd' , params = {chinaName : this.cnName, EnglishName :this.enName,price:this.currentPrice,imgurl: this.detailImgurl,sta:this.currentguige,username:_username}).then((res)=>{
			console.log(res);
			if(res['_body'] == 'ok'){
        //新建一个内容  
        var domGood = document.createElement('div');  
        domGood.style.width = '20px';  
        domGood.style.height = '20px';  
        domGood.style.background = '#000';  
        domGood.style.position = 'fixed';  
        domGood.style.left = nStartX + 'px';  
        domGood.style.top = nStartY + 'px';  
        document.body.appendChild(domGood); 

        // 设置抛物线曲度
        var a = -((nStartY - nEndY) * (nStartX - nTopX) - (nStartY - nTopY) * (nStartX - nEndX)) / ((nStartX * nStartX - nEndX * nEndX) * (nStartX - nTopX) - (nStartX * nStartX - nTopX * nTopX) * (nStartX - nEndX));  
        var b = ((nEndY - nStartY) - a * (nEndX * nEndX - nStartX * nStartX)) / (nEndX - nStartX);  
        var c = nStartY - a * nStartX * nStartX - b * nStartX;  
				// 设置定时器完成动画效果
				var timer = setInterval(function () {
					/*y = a * x*x + b*x +c;*/  
					if (x > nEndX) {  
						x = x - 10;  
						y = a * x * x + b * x + c;  
						domGood.style.left = x + 'px';  
						domGood.style.top = y + 'px';  
					}else {  
						domGood.parentNode.removeChild(domGood);  
						clearInterval(timer);  
					}
        }, 10);
        // 购物车数量++
        this.cartNumber = this.cartNumber + 1*1;
			}else{
				console.log('购买失败')
			}
		})
	}else{
		// 跳转路由到登录注册页面
		this.router.navigateByUrl('login')
	}

  }
	//跳转场景列表页   
  cakeTypes(){
	console.log(event.target.innerHTML.split(' ')[0]);
	let _type = event.target.innerHTML.split(' ')[0];
	this.router.navigate(['caketypes'],{queryParams: { type : _type }});
  }


}
