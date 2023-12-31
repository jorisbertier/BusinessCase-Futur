import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { INft, resultNft } from '../interface/nft/nft.interface';
import { Observable, catchError, throwError, switchMap} from "rxjs";
import { AuthService } from 'src/service/Auth/auth.service';
import { UserService } from 'src/service/user/user.service';


@Injectable({
  providedIn: 'root'
})
export class NftService {

  url = "https://127.0.0.1:8000/nft/api/nft/";
  urlNaruto= "https://127.0.0.1:8000/nft/api/naruto";
  urlShadow= "https://127.0.0.1:8000/nft/api/shadow";

  constructor(private http: HttpClient, private authService: AuthService, private userService: UserService) { }


  getAllNfts(): Observable<INft[]>{
    
    return this.http.get<INft[]>(this.url);
  }

  getNftById(id: number): Observable<INft>{
    return this.http.get<INft>('https://127.0.0.1:8000/nft/api/nft/' + id);
  }

  newNft(nft:INft) {
    return this.http.post<INft>('https://localhost:8000/nft/api/nft', nft);
  }

  editNft(id: number, data :any) : Observable<INft>{
    const body = JSON.stringify(data);
    const header = { 'content-type': 'application/x-www-form-urlencoded'};
    return this.http.put<any>(`https://localhost:8000/nft/api/nft/${id}`, body,  {'headers': header});
  }

  getSixLastNaruto(): Observable<INft[]>{
    
    return this.http.get<INft[]>(this.urlNaruto);
  }

  getSixLastShadow(): Observable<INft[]>{
    
    return this.http.get<INft[]>(this.urlShadow);
  }

  
  createNft(nft: INft, token: string): Observable<any> {
    const body = JSON.stringify(nft);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>('https://127.0.0.1:8000/nft/api/nft', body, { headers });
  }
  

  getNftsForUser(userId: number): Observable<INft[]> {
    return this.http.get<INft[]>(`https://127.0.0.1:8000/nft/api/nft/user/${userId}`).pipe(
      catchError((error: any) => {
        // Gérer les erreurs de requête ici
        return throwError(error);
      })
    );
  }

  deleteNftById(id: number): Observable<resultNft>{
    return this.http.delete<resultNft>('https://127.0.0.1:8000/nft/api/delete/' + id);
  }
}
