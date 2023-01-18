import { HttpClient,HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductModel } from "../models/product.model";

@Injectable()
export class ProductService{

base_url="http://localhost:5000/";
http_service:HttpClient;
constructor(private http_client:HttpClient){
this.http_service=http_client;
}

getProductlist(){
    let httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    }
    return this.http_service.get(this.base_url+"product",httpOptions)
}
getlimitProductlist(limit:number){

    let httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    }
    return this.http_service.get(this.base_url+"product?limit="+limit,httpOptions)
}
getSingleProduct(id:number)
{
    let httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        }),
    }
    return this.http_service.get(this.base_url+"product/"+id,httpOptions)
}
addProductService(product:ProductModel){
    let httpOptions={
        data:product,
        headers:new HttpHeaders({
            'Content-Type':"application/json"
        })
    }
    return this.http_service.post(this.base_url+'product',httpOptions).subscribe();
}

}