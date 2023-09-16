import { Component, OnInit } from '@angular/core';
import { INft } from '../nft.interface';
import { NftService } from '../nft.service';

@Component({
  selector: 'app-a-gallery',
  templateUrl: './a-gallery.component.html',
  styleUrls: ['./a-gallery.component.scss']
})
export class AGalleryComponent implements OnInit {

  nftList: INft[] = [];
  nftDetail: INft | undefined;
 
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
}
