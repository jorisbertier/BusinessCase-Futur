import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/interface/user/user.interface';
import { UserService } from 'src/service/user/user.service';
import {ActivatedRoute, Router} from "@angular/router";
import { HttpClient } from '@angular/common/http';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-a-profil',
  templateUrl: './a-profil.component.html',
  styleUrls: ['./a-profil.component.scss']
})
export class AProfilComponent implements OnInit{

  userList: IUser[] = [];
  userData: any;
  updateUser: boolean = false;

  constructor(
    private userService: UserService,
    private http: HttpClient,
    private route:ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit() {
    console.log(this.userService.getAllUser());
    this.userService.getAllUser().subscribe(userListResult => {
  
      this.userList = userListResult;
        console.table(this.userList);
      });

      this.onSubmit();

      //test
      const userId = this.route.snapshot.params['id'];
      this.userService.getUserData().subscribe(
        (userData) => {
          console.log('Données de l\'utilisateur connecté :', userData);
    
          // Vérifiez si userData n'est pas undefined avant d'accéder à ses propriétés
          if (userData) {
            this.userData = userData;
    
            // Remplissez les FormControl avec les données de l'utilisateur connecté
            this.editUser.controls['firstName'].setValue(userData.firstName);
            this.editUser.controls['lastName'].setValue(userData.lastName);
            this.editUser.controls['pseudo'].setValue(userData.pseudo);
            this.editUser.controls['email'].setValue(userData.email);
            this.editUser.controls['phoneNumber'].setValue(userData.phoneNumber);
            this.editUser.controls['avatar'].setValue(userData.avatar);
          }
        },
        (error) => {
          console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
        }
      );

    }

    onSubmit() {
      this.userService.getUserData().subscribe(
        (userData) => {
          console.log('Données de l\'utilisateur connecté :', userData);
          this.userData = userData;
          
        },
        (error) => {
          console.error('Erreur lors de la récupération des données de l\'utilisateur :', error);
        }
      );
    }

    
      public editUser: FormGroup = new FormGroup({
        firstName: new FormControl(''),
        lastName: new FormControl(''),
        pseudo: new FormControl(''),
        email: new FormControl(''),
        password: new FormControl(''),
        confirmPassword: new FormControl(''),
        phoneNumber: new FormControl(''),
        avatar: new FormControl(''),
      });

      

      update(){
      this.userService.updateUser(this.route.snapshot.params['id'], this.editUser.value).subscribe((result)  => {
        console.log(result);
        this.updateUser = true;
        this.router.navigate(['/profil/'+ this.route.snapshot.params['id']]);
      })
      }
}

