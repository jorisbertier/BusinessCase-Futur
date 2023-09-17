import { Component, OnInit } from '@angular/core';

import { INft } from '../../interface/nft/nft.interface';
import { NftService } from '../nft.service';


@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.scss']
})
export class CardCollectionComponent implements OnInit {

   
  narutoList: INft[] = [];
 
  constructor(private service: NftService) {
  }
  ngOnInit() {

  
  this.service.getSixLastNaruto().subscribe(narutoListResult => {
  
      this.narutoList = narutoListResult;
        console.table(this.narutoList);
      });
  }

}
