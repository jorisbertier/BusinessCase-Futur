import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/Cart/cart.service';
import { AuthService } from 'src/service/Auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public totalItem : number = 0;
  constructor(private cartService: CartService, private auth: AuthService) {

  }
  ngOnInit(): void {
    // this.cartService.getProducts().subscribe( res => {
    //   this.totalItem = res.length;
    // })

  }

  logout() {
    this.auth.clearToken();
  }

  checkIsLogged(): boolean {
    return this.auth.isLogged();
  }
}
