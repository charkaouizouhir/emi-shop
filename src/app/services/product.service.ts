import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
  getAllProducts(){
    return this.http.get("https://dummyjson.com/products");
  }

  getProductByCategory(keyword:string){
    return this.http.get("https://dummyjson.com/products/category/"+keyword);
  }

  searchProductsByKey(key: string | null){
    return this.http.get("https://dummyjson.com/products/search?q=$"+key);
  }
  getProductByID(id:number){
    return this.http.get("https://dummyjson.com/products/"+id);
  }
}
