import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../models/product';
import {NgStyle} from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './product-itm.component.html',
  styleUrl: './product-itm.component.css'
})
export class ProductItmComponent {
  @Input() product!: Product;
  @Output() productSelected=new EventEmitter();
  getColor(stock: number) {
    return stock > 0 ? 'green' : 'red';
  }
  getState(stock: number) {
    return stock> 0?"En stock":"en rupture de stock"
  }

  addToCart() {
    this.productSelected.emit(this.product);
  }
}
