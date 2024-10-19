import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from '../models/product';
import {NgStyle} from '@angular/common';
import {PanierService} from '../services/panier.service';
import {ProductDetailsService} from '../services/product-details.service';
import {Router} from '@angular/router';

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
  getColor(stock: number) {
    return stock > 0 ? 'green' : 'red';
  }
  constructor(private panierService:PanierService,private productDetailsService:ProductDetailsService,private router:Router) {
  }
  getState(stock: number) {
    return stock> 0?"En stock":"en rupture de stock"
  }

  addToCart() {
    this.panierService.addToCart(this.product);
    //alert("product added successfully");
  }
  onClickProduct(product: Product) {
    this.productDetailsService.setClickedProduct(product);
    this.router.navigate(['/product-details']);
  }
}
