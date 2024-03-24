import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../model/product.module.js';
import { Observable } from 'rxjs';
import {it} from "node:test";
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'] // Correction de la propriété styleUrl en styleUrls
})
export class ProductsComponent implements OnInit {

  constructor(private ps: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  get item(): Product {
    return this.ps.item;
  }

  set item(value:Product) {
    this.ps.item = value;
  }

  get items(): Array<Product> {
    return this.ps.items;
  }

  set items(value: Array<Product>) {
    this.ps.items = value;
  }

  // products$! :Observable<Array<Product>>
  public  keypord: string="";
  //
  getProducts() {

    this.ps.getProducts()
      .subscribe({
        next: data => {
         this.items=data
        },
        error: err => {
          console.log("error!!", err);
        }
      });
  }


  handleCheckProduct(product: any) {
    this.ps.checkProduct(product)
      .subscribe({
        next: () => {
          product.checked = !product.checked;
        },
        error: () => {
          console.log("error");
        }
      });
  }

  handeledeleteProducte(product: Product) {

      this.ps.deleteProduct(product).subscribe({
        next: value => {
          this.getProducts()
          // // hader at3tini mochlkila lakano 2 de ;l3ibate 3andhome mem id
          // this.products=this.products.filter(p=>p.id!=product.id)
        }
      })

  }
  //
  // seachProduct() {
  //   if (this.keypord.trim() === '') {
  //     this.getProducts();
  //     return;
  //   }
  //   this.ps.searchProducts(this.keypord).subscribe({
  //     next: value => {
  //       this.products = value;
  //     },
  //     error: err => {
  //       console.log("Error:", err);
  //     }
  //   });
  // }
}
