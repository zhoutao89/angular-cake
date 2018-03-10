import {RouterModule,Routes} from '@angular/router';

import {HomeComponent} from '../components/home/home.component';
import {CakedetailComponent} from '../components/cakedetail/cakedetail.component';
import {CakelistComponent} from '../components/cakelist/cakelist.component';
import {CakeclassifyComponent} from '../components/cakeclassify/cakeclassify.component';
import {IceclassifyComponent} from '../components/iceclassify/iceclassify.component';
import {SlicingclassifyComponent} from '../components/slicingclassify/slicingclassify.component';
import {WarmcakeComponent} from '../components/warmcake/warmcake.component';
import {CoffeeComponent} from '../components/coffee/coffee.component';
import {GiftComponent} from '../components/gift/gift.component';
import {CakecarComponent} from '../components/cakecar/cakecar.component';
import {CommunityComponent} from '../components/community/community.component';
import {LoginComponent} from '../components/login/login.component';
import {RegisterComponent} from '../components/register/register.component';
import {MineComponent} from '../components/mine/mine.component';
import {OrderComponent} from '../components/order/order.component';
import {AddressComponent} from '../components/address/address.component';
import {MyorderComponent} from '../components/myorder/myorder.component';
import {MyaddressComponent} from '../components/myaddress/myaddress.component';
import {CompleteComponent} from '../components/complete/complete.component';
import {UnfinishedComponent} from '../components/unfinished/unfinished.component';
import { SettingComponent } from '../components/setting/setting.component';
import { ChangepasswordComponent } from '../components/changepassword/changepassword.component';
import { PaymentComponent } from '../components/payment/payment.component';
import {CaketypesComponent} from '../components/caketypes/caketypes.component';



const appRoutes : Routes  = [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'detail',component:CakedetailComponent},
    {path:'cakelist',component:CakelistComponent,children:[
        {path:'',component:CakeclassifyComponent},
        {path:'cakeclassify',component:CakeclassifyComponent},
        {path:'iceclassify',component:IceclassifyComponent},
        {path:'slicingclassify',component:SlicingclassifyComponent},
        {path:'warmcake',component:WarmcakeComponent},
        {path:'coffee',component:CoffeeComponent},
        {path:'gift',component:GiftComponent}
    ]},
    {path:'cakecar',component:CakecarComponent},
    {path:'community',component:CommunityComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegisterComponent},
    {path:'mine',component:MineComponent},
    {path:'order',component:OrderComponent},
    {path:'address',component:AddressComponent},
    {path:'address',component:AddressComponent},
    {path:'myorder',component:MyorderComponent,children:[
        {path:'complete',component:CompleteComponent},
        {path:'unfinished',component:UnfinishedComponent},
        {path:'',component:UnfinishedComponent}
    ]},
    {path:'myaddress',component:MyaddressComponent},
    {path:'setting',component:SettingComponent},
    {path:'caketypes',component:CaketypesComponent},
    {path:'setting',component:SettingComponent},
    {path:'changepassword',component:ChangepasswordComponent},
    {path:'payment',component:PaymentComponent},
    {path:'caketypes',component:CaketypesComponent},
    {path:'setting',component:SettingComponent}
]

export const RootRouter = RouterModule.forRoot(
    appRoutes,
    {enableTracing: false}
)