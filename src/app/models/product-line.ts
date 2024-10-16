import {Product} from './product';

export class ProductLine {
  product: Product;
  qte:number;
  constructor(product: Product, qte:number) {
    this.product = product;
    this.qte = qte;
  }
}
