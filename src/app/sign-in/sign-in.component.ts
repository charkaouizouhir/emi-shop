
// sign-in.component.ts
import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './sign-in.component.html'
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSignIn() {
    // Exemple de vérification simple pour l'authentification
    if (this.username === 'user' && this.password === 'password') {
      // Si l'authentification réussit, sauvegarder un token d'authentification fictif
      this.authService.login('dummyAuthToken');
      this.router.navigate(['/']);
    } else {
      this.errorMessage = 'Nom d\'utilisateur ou mot de passe incorrect';
    }
  }
}
