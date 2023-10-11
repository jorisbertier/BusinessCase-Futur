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

  carts: any[] = [];
  totalPriceNfts: number = 0;

  constructor(private cartService: CartService) {}
  ngOnInit() {
    this.carts = this.cartService.getCarts();
    console.log(this.carts);
    this.calculateTotal();
  }

  removeFromCart(nft: any) {
    this.cartService.removeFromCart(nft);
    this.calculateTotal();
  }

  calculateTotal() {
    this.totalPriceNfts = this.carts.reduce((total, item) => total + item.price, 0);
  }

}
