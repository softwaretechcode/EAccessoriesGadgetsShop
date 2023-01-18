import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductModel } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css'],
  providers:[ProductService]
})
export class SingleProductComponent implements OnInit {

  product_list:ProductModel[]=[];
  constructor(private http_api:ProductService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    let id:number;
  this.route.params.subscribe(params=>id=params['id'])
  this.http_api.getSingleProduct(id).subscribe((data)=>this.product_list=data['result'])
console.log(this.product_list);
  
}
 buyThis(url:any){
  window.open(url)
 }


}
