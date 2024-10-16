import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductItmComponent} from './product-item/product-itm.component';
import {NavbarComponent} from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProductsListComponent, ProductItmComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'emi-shop';
}
