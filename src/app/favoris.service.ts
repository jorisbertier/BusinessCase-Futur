import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {

  private favoris: any[] = [];

  constructor() {
    // Récupérez les données des NFT favoris depuis le stockage local lors de l'initialisation du service
    const favorisStr = localStorage.getItem('favoris');
    this.favoris = favorisStr ? JSON.parse(favorisStr) : [];
  }
  
  addToFavoris(nft: any) {
    if (!this.favoris.some((fav: any) => fav.id === nft.id)) {
      this.favoris.push(nft);
      this.updateLocalStorage();
    }
  }

  removeFromFavoris(nft: any) {
    const index = this.favoris.findIndex((fav: any) => fav.id === nft.id);
    if (index !== -1) {
      this.favoris.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  getFavoris(): any[] {
    return this.favoris;
  }

  private updateLocalStorage() {
    localStorage.setItem('favoris', JSON.stringify(this.favoris));
  }
}
