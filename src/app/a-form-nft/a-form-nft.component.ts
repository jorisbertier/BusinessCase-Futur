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

  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService, private nftService: NftService) { }

  ngOnInit() {
    this.loggedInUser = this.authService.getLoggedInUser();
    if (this.loggedInUser) {
      console.log('Utilisateur connecté :', this.loggedInUser);
      // Vous pouvez accéder aux propriétés de l'utilisateur ici, par exemple : this.loggedInUser.pseudo
    } else {
      console.log('Aucun utilisateur connecté.');
    }
  }

  // uploadedFile: any;
  // addFile(event: any): void {
  //   if (event.target.files.length > 0) {
  //     this.uploadedFile = event.target.files[0];
  
  //     const reader = new FileReader();
  //     console.log(reader);
  
  //     reader.onload = (e: any) => {
        
  //       this.nftData.base64Image = e.target.result;
  //       console.log(this.nftData.base64Image);
  //     };
  
  //     reader.readAsDataURL(this.uploadedFile);
  //     console.log(this.uploadedFile);
  //   } else {
  //     this.uploadedFile = null;
  //   }
  // }

  createNft() {
    // Récupérer le token d'authentification
    const token = this.authService.getToken();
  
    // Vérifier si l'utilisateur est connecté en fonction du token
    if (token) {
      // L'utilisateur est connecté, vous pouvez maintenant envoyer les données du formulaire à votre API avec le token d'authentification.
      const headers = {
        'Authorization': `Bearer ${token}`, // Utilisation d'un token JWT, ajustez en fonction de votre système d'authentification.
      };
  
      // Envoyer les données du formulaire à votre API avec le token dans les en-têtes
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
    } else {
      console.log('Utilisateur non connecté. Vous devez vous connecter pour effectuer cette action.');
      // Gérer le cas où l'utilisateur n'est pas connecté, par exemple, en affichant un message d'erreur ou en redirigeant vers la page de connexion.
    }
  }

//   public form: FormGroup = new FormGroup({
//     title: new FormControl(''),
//     description: new FormControl(''),
//     price: new FormControl(''),
//     filePath: new FormControl(''),
//     alt: new FormControl(''),
//     category: new FormControl(''),
//     collection: new FormControl('')
//   });

//   onSubmit() {
//     if (this.form.valid) {
//       // window.location.reload();
//       if (this.authService.isLogged()) {
//         const token = this.authService.getToken();
//         if (this.authService.isLogged()) {
//           const token = this.authService.getToken();
//           if (token !== null) {
//             const price = parseFloat(this.form.value.price);
//             const nft: INft = {
//               id: 0, // Vous devrez obtenir l'ID correctement
//               dateCreation: new Date(), // Obtenez la date correctement
//               price: price,
//               title: this.form.value.title,
//               description: this.form.value.description,
//               filePath: this.form.value.filePath,
//               alt: this.form.value.alt,
//               user: {
//                 id: 0, // Vous devrez obtenir l'ID correctement
//                 firstName: '', // Obtenez les détails de l'utilisateur correctement
//                 lastName: '',
//                 pseudo: '',
//                 email: '',
//                 password: '',
//                 birth: '',
//                 phoneNumber: '',
//                 avatar: '',
//                 gender: '',
//                 adresses: {city: '', zipCode:'', street: '', country: ''} // Obtenez l'adresse correctement
//               },
//               categories: [], // Remplissez cette liste avec les catégories appropriées
//               collection: { id: 0, label: '' } // Obtenez la collection correctement
//             };
//           this.nftService.createNft(nft, token).subscribe(response => {

//           });
//         } else {
//           console.log('User token is null');
//         }
//       } else {
//         console.log('User not authenticated');
//       }
//       // this.getNft();
//       this.nftData = {}
//       this.form.reset();
//     } else {
//       console.log('Form is invalid');
//     }

// }
// }
}