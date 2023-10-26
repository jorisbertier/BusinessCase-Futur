import { Component, OnInit } from '@angular/core';
import { CartService } from '../../service/Cart/cart.service';
import { AuthService } from 'src/service/Auth/auth.service';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public totalItem : number = 0;
  userData: any;

  constructor(
    private cartService: CartService,
    private auth: AuthService,
    private userService: UserService
    )
    {}

  ngOnInit() : void {


    this.getUserData();
    console.log(this.getUserData());
    console.log('yoooo');

    this.getUserData();

  }

  logout() {
    this.auth.clearToken();
  }

  checkIsLogged(): boolean {
    return this.auth.isLogged();
  }

  getUserData() {
    this.userService.getUserData().subscribe(
      (userData) => {
        console.log('Données de l\'utilisateur connecté :', userData);
        this.userData = userData;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    );
  }
}
