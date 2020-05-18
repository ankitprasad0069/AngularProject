import { Injectable } from '@angular/core';
import { IProduct } from './products/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  getProducts():Observable<IProduct[]>{
    const url='/api/products/products.json';
    return this.http.get<IProduct[]>(url);

  }
  constructor(private http:HttpClient) { 
    
  }
}
