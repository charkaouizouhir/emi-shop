import { Injectable } from '@angular/core';
import {Product} from '../models/product';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {
  constructor() { }
  private clickedProduct=new BehaviorSubject<Product|null>(null);
  clickedProduct$=this.clickedProduct.asObservable();
  setClickedProduct(product: Product) {
    this.clickedProduct.next(product);
  }

}
