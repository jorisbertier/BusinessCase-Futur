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
  userForm: FormGroup;
  passwordPattern: string = '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])';
  passwordErrorMessage: string = '';
  emailErrorMessage : string = '';

  constructor(private formBuilder: FormBuilder, private userService: UserService, private cd: ChangeDetectorRef) {
    this.userForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(this.passwordPattern)]],
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
      
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@#$%^&!*])[A-Za-z\d@#$%^&!*]{10,}$/;
    const emailRegex: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!passwordRegex.test(user.password)) {
      console.log('Le mot de passe ne respecte pas les critères.');
      this.passwordErrorMessage = 'Le mot de passe doit contenir au moins, 1 lettre majuscule, 1 chiffre, 1 caractère spécial et faire au moins 10 caractères de long';
    } else {
      this.passwordErrorMessage = '';
    
      if (!emailRegex.test(user.email)) {
        console.log("L'adresse e-mail n'est pas valide.");
        this.emailErrorMessage = "L'adresse e-mail n'est pas valide.";
      } else {
        this.emailErrorMessage = '';
    
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
      }
    }
  }
}