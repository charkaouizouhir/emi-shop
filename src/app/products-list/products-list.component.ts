import {Component, OnInit} from '@angular/core';
import {Product} from '../models/product';
import {ProductAPI} from '../models/product-api';
import {ProductService} from '../services/product.service';
import {CategoryService} from '../services/category.service';
import {ProductItmComponent} from '../product-item/product-itm.component';
import {NgForOf} from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';
import {ProductLine} from '../models/product-line';
import {ShareDataService} from '../services/share-data.service';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [
    ProductItmComponent,
    NgForOf,
    NavbarComponent
  ],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent implements OnInit {
  products!: Product[];
  allProducts!: Product[];
  productsAPI!: ProductAPI[];
  productLigns!: ProductLine[];
  categories: any;
  selectedCategory!: string | null;
  searchKeyword!: string | null;

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
    private shareDataService: ShareDataService
  ) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data: any) => {
      this.productsAPI = data.products;
      this.products = [];

      this.productsAPI.forEach(p => {
        const prod = new Product(p.id, p.title, p.images[0], p.price, p.category, p.description, p.stock);
        this.products.push(prod);
      });
      this.allProducts = [...this.products];
    }, error => {
      console.log(error);
    });

    this.categoryService.getAllCategories().subscribe(data => {
      this.categories = data;
    });

    this.shareDataService.selectedCategory$.subscribe((category) => {
      this.selectedCategory = category;
      this.showProductsByCategory();
    });

    this.shareDataService.searchKeyword$.subscribe(data => {
      this.searchKeyword = data;
      this.onSearchKeyword(this.searchKeyword);
    });
  }

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

  showProductsByCategory() {
    if (this.selectedCategory && this.selectedCategory !== 'All') {
      this.productService.getProductByCategory(this.selectedCategory).subscribe((data: any) => {
        this.products = [];
        this.productsAPI = data.products;
        this.productsAPI.forEach(p => {
          const prod = new Product(p.id, p.title, p.images[0], p.price, p.category, p.description, p.stock);
          this.products.push(prod);
        });
      }, error => {
        console.log(error);
      });
    } else {
      this.products = [...this.allProducts];
    }
  }

  onSearchKeyword(keyword: string | null) {
    if (keyword && keyword.trim() !== "") {
      this.products = this.allProducts.filter(p =>
        p.name.toLowerCase().includes(keyword.toLowerCase())
      );
    } else {
      this.showProductsByCategory();
    }
  }
}
