import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from 'src/service/Auth/auth.service';
import { UserService } from 'src/service/user/user.service';
import { NftService } from '../nft.service';
import { INft } from 'src/interface/nft/nft.interface';


@Component({
  selector: 'app-a-form-nft',
  templateUrl: './a-form-nft.component.html',
  styleUrls: ['./a-form-nft.component.scss']
})
export class AFormNftComponent implements OnInit {

  nftData: any = {}; // Un objet pour stocker les données du formulaire
  nftCreated: boolean = false;
  loggedInUser: any;

  priceErrorMessage: string = '';

  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService, private nftService: NftService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    if (this.loggedInUser) {
      console.log('Utilisateur connecté :', this.loggedInUser);
    } else {
      console.log('Aucun utilisateur connecté.');
    }
  }

  createNft() {
    const token = this.authService.getToken();
  
    if (token) {
      const priceRegex = /^\d+$/;
      if (this.nftData.price > 0 && priceRegex.test(this.nftData.price)) {
      const headers = {
        'Authorization': `Bearer ${token}`,
      };
      this.http.post('https://localhost:8000/nft/api/nft', this.nftData, { headers, responseType: 'text' as 'json' }).subscribe(
        (response: any) => {
          console.log(response);
          this.nftData = {};
          this.nftCreated = true;
          // this.nftForm.reset();
          console.log(this.nftData);
        },
        (error) => {
          console.error(error);
        }
      );

      this.priceErrorMessage = '';
    } else {
      this.priceErrorMessage = 'Le prix ne peut pas être inférieur ou égale à 0.';
    }
  } else {
      console.log('Utilisateur non connecté. Vous devez vous connecter pour effectuer cette action.');
    }
  }

}