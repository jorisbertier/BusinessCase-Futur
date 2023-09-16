import { Component } from '@angular/core';
import { NftService } from '../nft.service';
import {FormControl, FormGroup} from "@angular/forms";
import { INft } from '../nft.interface';


@Component({
  selector: 'app-a-form-nft',
  templateUrl: './a-form-nft.component.html',
  styleUrls: ['./a-form-nft.component.scss']
})
export class AFormNftComponent {

  list:INft[] = [];
  constructor(private service: NftService){
    
  }

  

  public form:FormGroup = new FormGroup({

    title: new FormControl(''),
    price: new FormControl(''),
    filePath: new FormControl(''),
    alt: new FormControl(''),
    description: new FormControl(''),
    user: new FormControl(''),
    category: new FormControl(''),
    collection: new FormControl(''),

  })

  
  toList(nft: INft) {
 this.service.newNft(nft).subscribe(data => this.list.push(data))
 console.log("ok list");
 
  }

  handleSubmit(){
    
  this.toList(this.form.value)
    console.log(this.form.value);
  }
}
