import { Component, OnInit,Input } from "@angular/core";
import { Router } from "@angular/router";
import { Subscriber } from "rxjs";
import { ProductModel } from "../models/product.model";
import { CartService } from "../services/cart.service";
import { ProductService } from "../services/product.service";
@Component({
    selector:"product-component",
    templateUrl:'./product.component.html',
    styleUrls:["product.component.css"],
    
})

export class ProductComponent implements OnInit{
   
   product_list:ProductModel[]=[];
   category='laptop';
   constructor(private product_httpservice:ProductService,private http_Cart:CartService,private router:Router){
   }
   ngOnInit(): void {
      this.product_httpservice.getProductlist().subscribe((data)=>this.product_list=data['result'])
      
   }
   
addToCart(pid:any){
this.http_Cart.addToCartProduct(pid)
this.router.navigate(['/cart'])
}

filterProduct(val:string){
   if(val==''){
      val=this.product_list[0].category
   }
   this.category=val;
}
}


