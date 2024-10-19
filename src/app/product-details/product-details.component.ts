import { Component, OnInit } from '@angular/core';
import {CurrencyPipe, NgClass, NgForOf, NgIf} from '@angular/common';
import { Product } from '../models/product';
import { ProductDetailsService } from '../services/product-details.service';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    NgIf,
    CurrencyPipe,
    NgForOf,
    NgClass
  ],
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'] // Fixed property name from styleUrl to styleUrls
})
export class ProductDetailsComponent implements OnInit {
  product!: Product | null; // Use of non-null assertion is acceptable, but consider initialization
  mainImage!: string; // To hold the main image URL

  constructor(private productDetailsService: ProductDetailsService) { }

  ngOnInit(): void {
    this.getClickedProduct();
  }

  getClickedProduct(): void {
    this.productDetailsService.clickedProduct$.subscribe(data => {
      this.product = data;
      if (this.product) {
        this.mainImage = this.product.imgURL; // Initialize main image
      }
    });
  }

  setMainImage(image: string): void {
    this.mainImage = image; // Method to change the main image
  }

  addToCart(): void {
    // Implement your logic to add the product to the cart
    console.log('Product added to cart:', this.product);
  }


}
