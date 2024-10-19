import { Routes } from '@angular/router';
import {PanierComponent} from './panier/panier.component';
import {ProductsListComponent} from './products-list/products-list.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {OrdersComponent} from './orders/orders.component';
import {PaymentComponent} from './services/payment/payment.component';

export const routes: Routes = [
  {path:"panier", component:PanierComponent},
  {path:"products",component:ProductsListComponent},
  { path: '', redirectTo: '/products', pathMatch: 'full' },
  {path:"product-details",component:ProductDetailsComponent},
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'orders', component: OrdersComponent },
  {path:"payment", component:PaymentComponent},
];
