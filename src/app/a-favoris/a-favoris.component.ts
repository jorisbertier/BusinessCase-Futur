import { Component, OnInit } from '@angular/core';
import { FavorisService } from '../favoris.service';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-a-favoris',
  templateUrl: './a-favoris.component.html',
  styleUrls: ['./a-favoris.component.scss']
})
export class AFavorisComponent implements OnInit {

  favoris: any[] = [];
  userData: any;

  constructor(
    private favorisService: FavorisService,
    private userService: UserService
    )
    {}
  ngOnInit() {
    this.favoris = this.favorisService.getFavoris();
    console.log(this.favoris);

    this.getUserData();
  }

  removeFromFavoris(nft: any) {
    this.favorisService.removeFromFavoris(nft);
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
