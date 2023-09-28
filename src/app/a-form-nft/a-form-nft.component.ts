import { Component, OnInit } from '@angular/core';
import { NftService } from '../nft.service';
import {FormControl, FormGroup} from "@angular/forms";
import { INft } from '../../interface/nft/nft.interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { AuthService } from 'src/service/Auth/auth.service';
import { UserService } from 'src/service/user/user.service';


@Component({
  selector: 'app-a-form-nft',
  templateUrl: './a-form-nft.component.html',
  styleUrls: ['./a-form-nft.component.scss']
})
export class AFormNftComponent implements OnInit {

  nftData: any = {}; // Un objet pour stocker les données du formulaire
  nftCreated: boolean = false;

  loggedInUser: any;

  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    if (this.loggedInUser) {
      console.log('Utilisateur connecté :', this.loggedInUser);
      // Vous pouvez accéder aux propriétés de l'utilisateur ici, par exemple : this.loggedInUser.pseudo
    } else {
      console.log('Aucun utilisateur connecté.');
    }
  }

  uploadedFile: any;
  addFile(event: any): void {
    if (event.target.files.length > 0) {
      this.uploadedFile = event.target.files[0];
  
      const reader = new FileReader();
      console.log(reader);
  
      reader.onload = (e: any) => {
        
        this.nftData.base64Image = e.target.result;
        console.log(this.nftData.base64Image);
      };
  
      reader.readAsDataURL(this.uploadedFile);
      console.log(this.uploadedFile);
    } else {
      this.uploadedFile = null;
    }
  }

  createNft() {
    this.userService.getUserData().subscribe(
      (userData) => {
        if (userData) {
          // this.nftData.userPseudo = userData.pseudo;
          this.nftData.filePath = this.nftData.base64Image; // Utilisez la base64 au lieu du fichier
  
          // Autres données du formulaire
          let formData = new FormData();
          formData.append("title", this.nftData.title);
          formData.append("description", this.nftData.description);
          // ...
  
          this.http
            .post('https://localhost:8000/nft/api/nft', formData)
            .subscribe(
              (response: any) => {
                console.log(response);
                this.nftData = {};
                this.nftCreated = true;
              },
              (error) => {
                console.error(error);
              }
            );
        } else {
          console.error("Données de l'utilisateur connecté non disponibles.");
        }
      },
      (error) => {
        console.error("Erreur lors de la récupération des données de l'utilisateur :", error);
      }
    );
  }
  // list:INft[] = [];

  
  // constructor(private service: NftService){
    
  // }

  

//   public form:FormGroup = new FormGroup({

//     title: new FormControl(''),
//     price: new FormControl(''),
//     filePath: new FormControl(''),
//     alt: new FormControl(''),
//     description: new FormControl(''),
//     user: new FormControl(''),
//     categories: new FormControl(''),
//     collection: new FormControl(''),

//   })

  
//   toList(nft: INft) {
//     console.log(this.list);
    
//  this.service.newNft(nft).subscribe(data => this.list.push(data))
//  console.log("ok list");
//  console.log(this.list);
 
//   }
  // handleSubmit(){
    
  // this.toList(this.form.value)
  //   console.log(this.form.value);
  // }
}
