import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/Cart/cart.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.cartService.getProducts().subscribe( res => {
      this.totalItem = res.length;
    })
  }
}
