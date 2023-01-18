import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { ProductModel } from '../models/product.model';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css'],
  providers: [ProductService]
})
export class AddproductComponent implements OnInit {
  currentRate=5
  product_model:ProductModel
  constructor(private product_sercice:ProductService) { 
  
  }

  ngOnInit(): void {
  }
  addProduct(product :any)
  {
    this.product_model=product
    this.product_sercice.addProductService(this.product_model)
    console.log(this.product_model);
    console.log(product.rating);
    
  }

}
