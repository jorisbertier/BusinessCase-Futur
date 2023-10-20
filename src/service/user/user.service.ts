import { Injectable } from '@angular/core';
import { result, IUser } from 'src/interface/user/user.interface';
import {HttpClient} from "@angular/common/http";
import { AuthService } from '../Auth/auth.service';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  getAllUser(): Observable<IUser[]>{
    return this.http.get<IUser[]>("https://127.0.0.1:8000/user/api/user/");
  }

  getUserData(): Observable<IUser | undefined> {
    return this.getAllUser().pipe(
      map((users: IUser[]) => {
        const loggedInUserEmail = this.authService.getLoggedInUserEmail(); // Remplacez par la méthode appropriée pour obtenir l'e-mail de l'utilisateur connecté
        return users.find(user => user.email === loggedInUserEmail);
      })
    );
  }

  createUser(user: any): Observable<any> {
    return this.http.post('https://localhost:8000/user/api/user/', user, { responseType: 'text' as 'json' });
  }

  updateUser(id :number, data :any){
    const body = JSON.stringify(data);
    const header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.put<result>(`https://127.0.0.1:8000/user/api/user/${id}`, body,  {'headers': header});
  }
}
