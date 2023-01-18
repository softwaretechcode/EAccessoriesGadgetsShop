import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DemproComponent } from './dempro/dempro.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { LoginComponent } from './login/login.component';
import { SingUpComponent } from './sing-up/sing-up.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'404',component:ErrorpageComponent},
  {path:'cart', component:CartComponent},
  {path:'product',component:ProductComponent},
  {path:'checkout',component:CheckoutComponent},
  {path:'single-product/:id',component:SingleProductComponent},
  {path: 'dempro' ,component:DemproComponent},
  {path:'addproduct',component:AddproductComponent},
  {path:'login',component:LoginComponent},
  {path:'sing-up',component:SingUpComponent},
  // {path:'*',component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {
  

 }
