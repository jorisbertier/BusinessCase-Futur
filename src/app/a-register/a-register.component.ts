import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/interface/user/user.interface';
import { UserService } from './../../service/user/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import {DatePipe} from "@angular/common";
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-a-register',
  templateUrl: './a-register.component.html',
  styleUrls: ['./a-register.component.scss']
})
export class ARegisterComponent {

  subscriptionValid: boolean = false;

  // listUsers: IUser[] = [];
  // userDetail: IUser | undefined;

  // public form: FormGroup = new FormGroup({
  //   firstName: new FormControl(''),
  //   lastName: new FormControl(''),
  //   pseudo: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   birthDate: new FormControl(''),
  //   phoneNumber: new FormControl(''),
  //   avatar: new FormControl(''),
  //   gender: new FormControl(''),
  //   street: new FormControl(''),
  //   city: new FormControl(''),
  //   zipCode: new FormControl(''),
  //   country: new FormControl(''),
  // });

  // ngOnInit() {
  //   console.log(this.listUsers);
  //   this.service.getAllUser().subscribe(userListResult => {
  //     this.listUsers = userListResult;
  //     });
    
  // }

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
  userForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userService: UserService, private cd: ChangeDetectorRef) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      pseudo: ['', [Validators.required, Validators.minLength(5)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birth: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      avatar: [''],
      gender: ['', Validators.required],
      city: ['', Validators.required],
      zipCode: ['', Validators.required],
      street: ['', Validators.required],
      country: ['', Validators.required],
    });
  }

  onSubmit() {
    console.log('test');
    
    // if (this.userForm.valid) {
      console.log('onSubmit() called');
      const formData = this.userForm.value;
      const birthDate = new Date(formData.birth);
      const formattedBirthDate = birthDate.toISOString().split('T')[0]; // Format to YYYY-MM-DD
      const user = {
        email: formData.email,
        password: formData.password,
        pseudo: formData.pseudo,
        firstName: formData.firstName,
        lastName: formData.lastName,
        birth: formattedBirthDate, // Make sure the date format matches what your Symfony API expects
        phoneNumber: formData.phoneNumber,
        avatar: formData.avatar,
        gender: formData.gender,
        adresses: [
          {
            city: formData.city,
            zipCode: formData.zipCode,
            street: formData.street,
            country: formData.country,
          },
        ],
      };
      console.log(formData.pseudo);
      console.log(formData);
      
      this.userService.createUser(user).subscribe(
        (response) => {
          console.log('User created successfully', response);
          this.subscriptionValid = true;
          this.userForm.reset();
          console.log(this.subscriptionValid);
          console.log(this.userForm.value);
          
          this.cd.detectChanges();
        },
        (error) => {
          console.error('Error creating user', error);
        }
      );
    // }
  }

}
