import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductModel } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  
})
export class HomeComponent implements OnInit {

  product_list:ProductModel[]=[];
  product_full:ProductModel[]=[];
  constructor(private http_service:ProductService,private http_Cart:CartService,private router:Router) { }

  ngOnInit(): void {
    this.http_service.getlimitProductlist(10).subscribe((data)=>this.product_list=data['result']);
    this.http_service.getlimitProductlist(20).subscribe((data)=>this.product_full=data['result']);
  }
  addToCart(pid:any){
    
    this.http_Cart.addToCartProduct(pid)
    this.router.navigate(['/cart'])
    }

}
