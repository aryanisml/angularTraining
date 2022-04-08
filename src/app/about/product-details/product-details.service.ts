import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private httpClient: HttpClient) { }

  public getAllApi(){

    return forkJoin([this.httpClient.get('https://fakestoreapi.com/products'),
    this.httpClient.get('https://fakestoreapi.com/products/1')]);

  }
  
  public getProductData() : Observable<any>{
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
  

  public getSingleProduct(id: number) : Observable<any>{
    return this.httpClient.get('https://fakestoreapi.com/products/'+ id);
  }
  

}
