import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private carts: any[] = [];

  constructor() {
    // Récupérez les données des NFT favoris depuis le stockage local lors de l'initialisation du service
    const cartsStr = localStorage.getItem('carts');
    this.carts = cartsStr ? JSON.parse(cartsStr) : [];
  }
  
  addToCart(nft: any) {
    if (!this.carts.some((fav: any) => fav.id === nft.id)) {
      this.carts.push(nft);
      this.updateLocalStorage();
    }
  }

  removeFromCart(nft: any) {
    const index = this.carts.findIndex((fav: any) => fav.id === nft.id);
    if (index !== -1) {
      this.carts.splice(index, 1);
      this.updateLocalStorage();
    }
  }

  getCarts(): any[] {
    return this.carts;
  }

  private updateLocalStorage() {
    localStorage.setItem('carts', JSON.stringify(this.carts));
  }
  // public cartItemList : any = [];
  // public productList = new BehaviorSubject<any>([]);
  // constructor() {}
  //   getProducts()
  //   {
  //     return this.productList.asObservable();
  //   }

  //   setProduct(product : any) {
  //     this.cartItemList.push(...product);
  //   }

  //   addToCart(product : any) {
  //     this.cartItemList.push(product);
  //     this.productList.next(this.cartItemList);
  //     this.getTotalPrice();
  //     console.log(this.cartItemList);
      
  //   }

  //   getTotalPrice(): number{
  //     let grandTotal = 0;
  //     this.cartItemList.map((a: any) => {
  //       grandTotal += a.total;
  //     })
  //     return grandTotal;
  //   }

  //   removeCartItem(product: any) {
  //     const index = this.cartItemList.findIndex((a: any) => product.id === a.id);
  //     if (index !== -1) {
  //       const copy = [...this.cartItemList]; // Créez une copie du tableau
  //       copy.splice(index, 1); // Supprimez l'élément de la copie
  //       this.cartItemList = copy; // Remplacez le tableau original par la copie modifiée
  //       this.productList.next(this.cartItemList);
  //     }
  //   }

  //   removeAllCart() {
  //     this.cartItemList = [];
  //     this.productList.next(this.cartItemList);
  //   }

}
