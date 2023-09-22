import { Injectable } from '@angular/core';
import { result, IUser } from 'src/interface/user/user.interface';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUser(): Observable<IUser[]>{
    return this.http.get<IUser[]>("https://127.0.0.1:8000/user/api/user/");
  }

  // addUser(user: IUser): Observable<result> {
  //   const body = JSON.stringify(user);
  //   const header = { 'content-type': 'application/x-www-form-urlencoded'};
  //   return this.http.post<result>("https://127.0.0.1:8000/user/api/user", body, {'headers': header})

  // }


  createUser(user: any): Observable<any> {
    return this.http.post('https://localhost:8000/user/api/user/', user, { responseType: 'text' as 'json' });
  }
}
