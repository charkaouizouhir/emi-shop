import {Component, OnInit} from '@angular/core';
import {PanierService} from '../services/panier.service';
import {ProductLine} from '../models/product-line';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-panier',
  standalone: true,
  imports: [],
  templateUrl: './panier.component.html',
  styleUrl: './panier.component.css'
})
export class PanierComponent implements OnInit{
  productLigns:Array<ProductLine>=[];
  constructor(private panierService: PanierService,private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.productLigns=this.panierService.productLigns;
    }


  getTotale() {
    return this.panierService.calculTotal();
  }

  onCheckout() {
    if (!this.authService.isAuthenticated()) {
      // Rediriger vers la page de signup ou sign-in
      this.router.navigate(['/sign-up']);
    } else {
      // Procéder au checkout
      this.router.navigate(['/payment']);
    }
  }
}
