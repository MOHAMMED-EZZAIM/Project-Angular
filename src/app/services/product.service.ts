import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../model/product.module.js';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  get item(): Product {
    return this._item;
  }

  set item(value: Product) {
    this.item = value;
  }

  get items(): Array<Product> {
    return this._items;
  }

  set items(value: Array<Product>) {
    this.items = value;
  }

  _items!: Array<Product>;
  _item!: Product;

  constructor(private http: HttpClient) {

  }

  public getProducts(): Observable<Array<Product>>{
    return this.http.get<Array<Product>>(`http://localhost:9999/products`);
  }

  public checkProduct(product: Product): Observable<any> {
    return  this.http.patch(`http://localhost:9999/products/${product.id}`, {
      checked: !product.checked
    });
  }

  public deleteProduct(product: Product) {
    return this.http.delete<any>(`http://localhost:9999/products/${product.id}`);
  }


  saveProduct(): Observable<number> {
    return this.http.post<number>("http://localhost:9999/products", this.item);
  }

  //faux
  // saveProduct(product: any):Observable<Product> {
  //   return this.http.post<Product>(`http://localhost:9999/products`,{
  //     product
  //   });
  //
  // }


  public searchProducts(keyword: string): Observable<Product[]> {
    const id = Number(keyword);
    if (!isNaN(id)) {
      return this.searchProductsById(id);
    } else {
      return this.searchProductsByName(keyword);
    }
  }

  private searchProductsById(id: number): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:9999/products?id=${id}`);
  }

  private searchProductsByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`http://localhost:9999/products?name=${name}`);
  }
}
