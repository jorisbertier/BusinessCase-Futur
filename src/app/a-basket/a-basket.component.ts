import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { INft } from 'src/interface/nft/nft.interface';
import { CartService } from 'src/service/Cart/cart.service';

@Component({
  selector: 'app-a-basket',
  templateUrl: './a-basket.component.html',
  styleUrls: ['./a-basket.component.scss']
})
export class ABasketComponent implements OnInit {

  cart: INft[] = [];
  public products : any = [];
  public grandTotal!: number;
 
  constructor(private cartService: CartService, private cookieService: CookieService) {
  }

  ngOnInit() {
    // this.showCartContents();
    // this.getCart(); 
    this.cartService.getProducts().subscribe(res => {
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
      console.log(this.grandTotal);
      
    })
    
  }

  removeItem(item: any) {
    this.cartService.removeCartItem(item);
  }

  emptyCart() {
    this.cartService.removeAllCart();
  }
  // getCart(): INft[] {
  //   const currentCart = this.cookieService.get('cart') || '[]';
  //   return JSON.parse(currentCart);
  // }

  // showCartContents() {
  //   const cart = this.getCart();
  //   console.log('Contenu du panier :', cart);
  //   console.log(cart);
    
    // Vous pouvez maintenant utiliser "cart" pour afficher ou manipuler le contenu du panier
  // }
}
