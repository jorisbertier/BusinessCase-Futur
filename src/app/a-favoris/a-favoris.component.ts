import { Component, OnInit } from '@angular/core';
import { FavorisService } from '../favoris.service';

@Component({
  selector: 'app-a-favoris',
  templateUrl: './a-favoris.component.html',
  styleUrls: ['./a-favoris.component.scss']
})
export class AFavorisComponent implements OnInit {

  favoris: any[] = [];

  constructor(private favorisService: FavorisService) {}
  ngOnInit() {
    this.favoris = this.favorisService.getFavoris();
    console.log(this.favoris);
  }

  removeFromFavoris(nft: any) {
    this.favorisService.removeFromFavoris(nft);
  }
}
