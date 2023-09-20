import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IToken } from 'src/interface/token/itoken.interface';
import { Icredentials } from 'src/interface/user/user.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  url = "https://localhost:8000/api/login_check";

  constructor(private http: HttpClient) { }

  login(credentials: any):Observable<IToken> {
    return this.http.post<IToken>('https://localhost:8000/api/login_check', credentials);
  }

}
