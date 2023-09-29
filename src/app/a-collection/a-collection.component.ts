import { Component, OnInit } from '@angular/core';
import { NftService } from '../nft.service';
import { UserService } from 'src/service/user/user.service';

@Component({
  selector: 'app-a-collection',
  templateUrl: './a-collection.component.html',
  styleUrls: ['./a-collection.component.scss']
})
export class ACollectionComponent implements OnInit {

  userData: any;
  nfts: any;
  constructor(private userService: UserService, private nftService: NftService ) {}

  ngOnInit() {
    this.getNftUserConnected();
    
    this.userService.getUserData().subscribe(user => {
      if (user) {
        const userId = user.id;
        this.getNftsForUser(userId);
      }
    });
  }

  getNftUserConnected() {

    this.userService.getUserData().subscribe(
      (userData) => {
        // Utilisez les données de l'utilisateur connecté ici, par exemple :
        console.log('Données de l\'utilisateur connecté :', userData);
        this.userData = userData;
      },
      (error) => {
        console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
      }
    );
  }

  nftList: any;
  
  getNftsForUser(id : number) {
    this.nftService.getNftsForUser(id).subscribe(nftListResult => {
      this.nftList = nftListResult;
        console.table(this.nftList);
      });
  }

}
