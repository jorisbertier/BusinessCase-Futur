import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any = [];
  public productList = new BehaviorSubject<any>([]);
  constructor() {}
    getProducts()
    {
      return this.productList.asObservable();
    }

    setProduct(product : any) {
      this.cartItemList.push(...product);
    }

    addToCart(product : any) {
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
      this.getTotalPrice();
      console.log(this.cartItemList);
      
    }

    getTotalPrice(): number{
      let grandTotal = 0;
      this.cartItemList.map((a: any) => {
        grandTotal += a.total;
      })
      return grandTotal;
    }

    removeCartItem(product: any) {
      const index = this.cartItemList.findIndex((a: any) => product.id === a.id);
      if (index !== -1) {
        const copy = [...this.cartItemList]; // Créez une copie du tableau
        copy.splice(index, 1); // Supprimez l'élément de la copie
        this.cartItemList = copy; // Remplacez le tableau original par la copie modifiée
        this.productList.next(this.cartItemList);
      }
    }

    removeAllCart() {
      this.cartItemList = [];
      this.productList.next(this.cartItemList);
    }

}
