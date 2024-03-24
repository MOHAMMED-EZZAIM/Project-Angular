import { Component, OnInit } from '@angular/core';
import {ProductService} from "../services/product.service";
import {Product} from "../model/product.module";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'] // Correction ici
})
export class NewProductComponent implements OnInit {
  constructor(private productService: ProductService) { }

  get item(): Product {
    return this.productService._item;
  }

  set item(value: Product) {
    this.productService.item = value;
  }
  ngOnInit(): void {

  }
  save() {
    this.productService.saveProduct().subscribe({
      next:data => {
        console.log(data)
      },
      error: (err) => {
        console.log(err);
      }
    });

  }
}
