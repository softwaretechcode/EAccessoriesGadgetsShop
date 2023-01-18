import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CheckOutModel } from "../models/checkout.model";


@Injectable()
export class CheckOutService{
base_url="https://localhost:5000/"
checkOutModel:CheckOutModel;
http_client:HttpClient;
constructor(private httpsClient:HttpClient){
this.http_client=httpsClient;
}

checkOutProduct(){

}

}