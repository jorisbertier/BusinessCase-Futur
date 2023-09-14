import { Component } from '@angular/core';
import { NftService } from '../nft.service';
import {FormControl, FormGroup} from "@angular/forms";
import { INft } from '../nft.interface';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-a-form-nft',
  templateUrl: './a-form-nft.component.html',
  styleUrls: ['./a-form-nft.component.scss']
})
export class AFormNftComponent {

  list:INft[] = [];
  constructor(private service: NftService){}

  

  public form:FormGroup = new FormGroup({

    title: new FormControl(''),
    price: new FormControl(''),
    filePath: new FormControl(''),
    alt: new FormControl(''),
    description: new FormControl(''),
    user: new FormControl(''),
    categorie: new FormControl(''),
    collection: new FormControl(''),

  })

  
  toList(nft: INft) {
    this.service.newNft(nft).subscribe(
      (data) => {
        console.log(data);
        console.log(this.list);
        this.list.push(data);
        console.log(data);
        console.log('NFT créé avec succès !');
      },
      (error) => {
        console.error('Erreur lors de la création du NFT :', error);
      }
    );
  }

  handleSubmit(){
    // console.log(this.form.value);
    
    // console.log(this.list);
    console.log(this.list);
    this.toList(this.form.value);
    console.log(this.list);
  }
}
