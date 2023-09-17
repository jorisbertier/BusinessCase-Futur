import { Component, OnInit } from '@angular/core';
import { INft } from '../../interface/nft/nft.interface';
import { NftService } from '../nft.service';

@Component({
  selector: 'app-a-gallery',
  templateUrl: './a-gallery.component.html',
  styleUrls: ['./a-gallery.component.scss']
})
export class AGalleryComponent implements OnInit {

  nftList: INft[] = [];
  nftDetail: INft | undefined;
  searchQuery: string = '';
 
  constructor(private service: NftService) {
  }
  ngOnInit() {

    this.service.getAllNfts().subscribe(nftListResult => {
  
      this.nftList = nftListResult;
        console.table(this.nftList);
      });
  }
  viewOneNft(id: number){
    this.service.getNftById(id).subscribe(nftResult =>{
      this.nftDetail = nftResult;
    })
  }

  /////FILTRE NFT /////

  sortNfts(order: 'ascending' | 'descending') {
    // Utilisez la méthode JavaScript sort() pour trier votre liste de NFTs en fonction du prix
    this.nftList.sort((a, b) => {
      if (order === 'ascending') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  filterValue: number = 0; // Valeur entrée par l'utilisateur
  filterValue2: number = 0; // Valeur entrée par l'utilisateur

  filterByPrice() {
    // Filtrez la liste de NFTs pour ne montrer que ceux dont le prix est inférieur à filterValue
    const filteredNftList = this.nftList.filter((nft) => {
      const price = nft.price; // Supposons que chaque NFT a une propriété "price"
      return price < this.filterValue;
    });

    // Utilisez filteredNftList pour afficher les résultats de la recherche dans votre vue
    // Par exemple, vous pouvez affecter filteredNftList à une variable nftList à afficher dans la vue
    this.nftList = filteredNftList;
  }

  filterByPriceHight() {
    const filteredNftList2 = this.nftList.filter((nft) => {
      const price = nft.price; 
      return price > this.filterValue2;
    });
    this.nftList = filteredNftList2;
  }

  reloadPage() {
    window.location.reload(); // Rechargez la page pour réinitialiser tout
  }

}
