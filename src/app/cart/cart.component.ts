import { Component, OnInit } from '@angular/core';
import { CartModel } from '../models/cart.model';
import { CartService } from '../services/cart.service';
import { Route, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers:[CartService]
})
export class CartComponent implements OnInit {

  cartProduct_list:CartModel[]=[]
  constructor(private http_service:CartService,private router : Router) {
  }

  ngOnInit(): void {
  this.http_service.getCartProducts().subscribe((data)=>this.cartProduct_list=data['result'])
  }

 checkOutItem(cid:number){
  this.router.navigate(["/checkout"]);
  }
  
removeItem(cid:number){
  this.http_service.removeCartItem(cid);
}

}
