import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CartModel } from "../models/cart.model";

@Injectable()
export class CartService{
cart_baseLink="http://localhost:5000/"
 cartModel:CartModel;
http_cartservice:HttpClient
constructor(private http_client:HttpClient){
    this.http_cartservice=http_client;
}

getCartProducts()
{
    let httpOptions={
        headers:new HttpHeaders({
            'Content-Type':"application/json"
        })
    }
    return this.http_cartservice.get(this.cart_baseLink+'cart',httpOptions)
}

addToCartProduct(pid:any){
    
    let httpOptions={
        data:{'pid':pid},
        // headers:new HttpHeaders({
        //     'Content-Type':"application/json"
        // })
    }
    return this.http_cartservice.post(this.cart_baseLink+'cart',httpOptions).subscribe();
}
removeCartItem(cid:number){
    return this.http_cartservice.delete(this.cart_baseLink+'cart/'+cid).subscribe();
}

}