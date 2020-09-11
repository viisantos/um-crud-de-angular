import { Product } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, from, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product[];
  constructor(private http: HttpClient ) {
      this.products =[
         {id: 1, name: 'produto1'},
         {id: 2, name: 'produto2'},
         {id: 3, name: 'produto3'},
         {id: 4, name: 'produto4'},
         {id: 5, name: 'produto5'}
      ];
   }
   listAll(): Observable<Product[]> {
     return of(this.products);
   }
}
