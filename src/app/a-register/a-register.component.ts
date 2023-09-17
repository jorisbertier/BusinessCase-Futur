import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/interface/user/user.interface';
import { UserService } from './../../service/user/user.service';
import {FormControl, FormGroup} from "@angular/forms";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-a-register',
  templateUrl: './a-register.component.html',
  styleUrls: ['./a-register.component.scss']
})
export class ARegisterComponent implements OnInit {

  listUsers: IUser[] = [];
  userDetail: IUser | undefined;

  public form: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    pseudo: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    birthDate: new FormControl(''),
    phoneNumber: new FormControl(''),
    avatar: new FormControl(''),
    gender: new FormControl(''),
    street: new FormControl(''),
    city: new FormControl(''),
    zipCode: new FormControl(''),
    country: new FormControl(''),
  });

  constructor(private service: UserService) {
  }

  ngOnInit() {
    console.log(this.listUsers);
    this.service.getAllUser().subscribe(userListResult => {
      this.listUsers = userListResult;
      });
    
  }

  // getUser(){
  //   this.service.getAllUser().subscribe(Users => {
  //     this.listUsers = Users;
  //   });
  // }


  // onSubmit() {   // Form danny
  //   // window.location.reload();
  //   if (this.form.valid) {
  //     // window.location.reload();
  //     // const formattedBirth = this.datePipe.transform(this.form.value.birth, 'dd/MM/yyyy');

  //     const user: IUser = {

  //       firstName: this.form.value.firstName,
  //       lastName: this.form.value.lastName,
  //       pseudo: this.form.value.pseudo,
  //       email: this.form.value.email,
  //       password: this.form.value.password,
  //       birthDate: this.form.value.birthDate,
  //       phoneNumber: this.form.value.phoneNumber,
  //       avatar: this.form.value.avatar,
  //       gender: this.form.value.gender,
  //       adress: {
  //         street: this.form.value.street,
  //         city: this.form.value.city,
  //         zipCode: this.form.value.zipCode,
  //         country: this.form.value.country
  //       },
        
  //     };

  //     this.service.addUser(user).subscribe(response => {
  //       // this.getUser();
  //       this.form.reset();
  //     });
  //   } else {
  //     console.log('Formulaire invalide');
  //   }
  // }

}
