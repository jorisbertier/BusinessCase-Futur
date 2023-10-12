import { Component, OnInit } from '@angular/core';
import { NftService } from '../nft.service';
import { INft } from 'src/interface/nft/nft.interface';

@Component({
  selector: 'app-card-second-collection',
  templateUrl: './card-second-collection.component.html',
  styleUrls: ['./card-second-collection.component.scss']
})
export class CardSecondCollectionComponent implements OnInit {

  shadowList: INft[] = [];

  constructor(private service: NftService) {
  }
  
  ngOnInit() {

      this.getLastSixShadow();
  }

  getLastSixShadow() {
    this.service.getSixLastShadow().subscribe(shadowListResult => {
      this.shadowList = shadowListResult;
      });
  }

}
