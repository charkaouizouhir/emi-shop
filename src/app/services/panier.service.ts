import { Injectable } from '@angular/core';
import {ProductLine} from '../models/product-line';
import {Product} from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }
  productLigns :Array<ProductLine>=[];
  addToCart(p: Product) {
    let found = false;
    for (let i = 0; i < this.productLigns.length; i++) {
      if (this.productLigns[i].product.id === p.id) {
        this.productLigns[i].qte++;
        found = true;
        break;
      }
    }
    if (!found) {
      const productLigne = new ProductLine(p, 1);
      this.productLigns.push(productLigne);
    }
    p.stock--;
  }
  calculTotal(){
    let somme=0;
    for(let i=0; i<this.productLigns.length; i++){
      somme+=this.productLigns[i].qte*this.productLigns[i].product.price;
    }
    return somme;
  }
}
