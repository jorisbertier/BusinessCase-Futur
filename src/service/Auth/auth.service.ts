import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor(private route:Router) { }

  saveToken(token:string) {
    localStorage.setItem('token', token);
    this.route.navigate(['/profil']);
  }

  clearToken() {
    localStorage.removeItem("token");
    this.route.navigate(['/']);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isLogged():boolean{
    const token = localStorage.getItem('token');
    return !! token;
  }

  getLoggedInUser(): any {
    const token = localStorage.getItem('token');
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Décodage du payload
      return tokenPayload; // Vous pouvez retourner les informations de l'utilisateur ici
    }
    return null; // Aucun utilisateur connecté ou token manquant
  }

}