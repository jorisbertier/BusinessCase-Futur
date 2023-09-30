import { Component, OnInit } from '@angular/core';
import { NftService } from '../nft.service';
import { UserService } from 'src/service/user/user.service';
import { INft } from 'src/interface/nft/nft.interface';

@Component({
  selector: 'app-a-collection',
  templateUrl: './a-collection.component.html',
  styleUrls: ['./a-collection.component.scss']
})
export class ACollectionComponent implements OnInit {

  userData: any;
  nfts: any;
  nftList: INft[] = [];


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
  
  
  getNftsForUser(id : number) {
    this.nftService.getNftsForUser(id).subscribe(nftListResult => {
      this.nftList = nftListResult;
        console.table(this.nftList);
      });
  }

  deleteNftById(id: number, index: number) {
    this.nftService.deleteNftById(id).subscribe(resultatDelete => {
      this.nftList.splice(index,1);
      console.log(this.nftList);
    });
  }

  confirmDeleteNft(id: number, index: number): void {
    const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cet élément ? Cela sera définitif !!');
    if (confirmation) {
      this.deleteNftById(id, index);
    }
  }

}
