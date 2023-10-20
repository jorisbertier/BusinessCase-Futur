import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { NftService } from '../nft.service';

@Component({
  selector: 'app-a-nft-edit',
  templateUrl: './a-nft-edit.component.html',
  styleUrls: ['./a-nft-edit.component.scss']
})
export class ANftEditComponent implements OnInit{

  constructor(
    private route:ActivatedRoute,
    private nftService : NftService,
    private router: Router

  ) {
  }
  public editNft: FormGroup = new FormGroup({
    title: new FormControl(''),
    filePath: new FormControl(''),
    price: new FormControl(''),
  });
  ngOnInit() {
    // console.log(this.route.snapshot.params['id'])
    this.nftService.getNftById(this.route.snapshot.params['id']).subscribe((result)  =>{
      console.log(result)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ;
      this.editNft = new FormGroup({
        title: new FormControl(result['title']),
        filePath: new FormControl(result['filePath']),
        price: new FormControl(result['price']),
      })
    });
  }



  update(){
  this.nftService.editNft(this.route.snapshot.params['id'], this.editNft.value).subscribe((result)  => {
    console.log(result);
    this.router.navigate(['/nft/'+ this.route.snapshot.params['id']]);
  })
  }
  }

