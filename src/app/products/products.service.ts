import { Product } from './product';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[] = [];

  constructor(private http: HttpClient) {
    for(let i = 1; i <= 30; i++){
      this.products.push({id: i, name: `Product ${i}`});
    }
  }

  // tslint:disable-next-line: typedef
  listAll(): Observable <Product[]>{
    return of(this.products);
  }
}
