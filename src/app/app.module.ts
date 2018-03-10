import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {RootRouter} from './router/router';


import { ElModule } from 'element-angular'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'element-angular/theme/index.css';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CakelistComponent } from './components/cakelist/cakelist.component';
import { CakedetailComponent } from './components/cakedetail/cakedetail.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CakecarComponent } from './components/cakecar/cakecar.component';
import { MineComponent } from './components/mine/mine.component';
import { CommunityComponent } from './components/community/community.component';
import { OrderComponent } from './components/order/order.component';
import { ZhikecomponentComponent } from './publicComponent/zhikecomponent/zhikecomponent.component';
import { ShudongcomponentComponent } from './publicComponent/shudongcomponent/shudongcomponent.component';
import { PublicfooterComponent } from './components/publicfooter/publicfooter.component';
import { PublicheaderComponent } from './components/publicheader/publicheader.component';
import { MyorderComponent } from './components/myorder/myorder.component';
import { MyaddressComponent } from './components/myaddress/myaddress.component';
import { CompleteComponent } from './components/complete/complete.component';
import { UnfinishedComponent } from './components/unfinished/unfinished.component';
import { SettingComponent } from './components/setting/setting.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { ChangepasswordComponent } from './components/changepassword/changepassword.component';
import { PaymentComponent } from './components/payment/payment.component';

import { AddressComponent } from './components/address/address.component';


import { CakeclassifyComponent } from './components/cakeclassify/cakeclassify.component';
import { IceclassifyComponent } from './components/iceclassify/iceclassify.component';
import { SlicingclassifyComponent } from './components/slicingclassify/slicingclassify.component';
import { WarmcakeComponent } from './components/warmcake/warmcake.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { GiftComponent } from './components/gift/gift.component';
import { CaketypesComponent } from './components/caketypes/caketypes.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CakelistComponent,
    CakedetailComponent,
    LoginComponent,
    RegisterComponent,
    CakecarComponent,
    MineComponent,
    CommunityComponent,
    OrderComponent,
    ZhikecomponentComponent,
    ShudongcomponentComponent,
    PublicfooterComponent,
    PublicheaderComponent,
    AddressComponent,
    CakeclassifyComponent,
    IceclassifyComponent,
    SlicingclassifyComponent,
    WarmcakeComponent,
    CoffeeComponent,
    GiftComponent,
    MyorderComponent,
    MyaddressComponent,
    CompleteComponent,
    UnfinishedComponent,
    SettingComponent,
    DatagridComponent,
    ChangepasswordComponent,
    PaymentComponent,
    CaketypesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    RootRouter
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
