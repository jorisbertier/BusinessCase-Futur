import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/interface/user/user.interface';
import { UserService } from 'src/service/user/user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from 'src/service/Auth/auth.service';

@Component({
  selector: 'app-a-profil',
  templateUrl: './a-profil.component.html',
  styleUrls: ['./a-profil.component.scss']
})
export class AProfilComponent implements OnInit{

  userList: IUser[] = [];

  constructor(private userService: UserService, private http: HttpClient) {}

  ngOnInit() {
    console.log(this.userService.getAllUser());
    this.userService.getAllUser().subscribe(userListResult => {
  
      this.userList = userListResult;
        console.table(this.userList);
      });

    }
}

