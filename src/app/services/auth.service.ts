// auth.service.ts
import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router : Router) { }
  // Vérifie si l'utilisateur est authentifié
  isAuthenticated(): boolean {
    // Vérifier l'existence du jeton d'authentification (exemple avec localStorage)
    return !!localStorage.getItem('authToken');
  }

  // Connexion - exemple de sauvegarde du jeton d'authentification
  login(token: string) {
    localStorage.setItem('authToken', token);
  }

  // Déconnexion
  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/products']);
  }
}
