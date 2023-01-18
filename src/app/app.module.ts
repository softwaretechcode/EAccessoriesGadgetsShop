import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { HomeComponent } from './home/home.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { DemproComponent } from './dempro/dempro.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { CartService } from './services/cart.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddproductComponent } from './addproduct/addproduct.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    HeaderComponent,
    SingleProductComponent,
    HomeComponent,
    ErrorpageComponent,
    DemproComponent,
    AddproductComponent,
    SingUpComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
  ],
  providers: [ProductService,CartService],
  bootstrap: [AppComponent]
  // this is the bootstrap mains starting of angular project
})
export class AppModule { }
