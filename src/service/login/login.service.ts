import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Icredentials } from 'src/interface/user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url = "https://localhost:8000/api/login_check";

  constructor(private http: HttpClient) { }

  login(credentials: any) {
    return this.http.post<Icredentials>('https://localhost:8000/api/login_check', credentials);
  }

}
