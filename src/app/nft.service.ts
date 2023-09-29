import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from "@angular/common/http";
import { INft, resultNft } from '../interface/nft/nft.interface';
import { FormGroup } from '@angular/forms';
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NftService {

  url = "https://127.0.0.1:8000/nft/api/nft/";
  urlNaruto= "https://127.0.0.1:8000/nft/api/naruto";
  // header = {
  //   'Access-Control-Allow-Origin':'*',
  //   'Access-Control-Allow-Headers': '*',
  //   'Access-Control-Allow-Methods': '*',
  //   'content-type': 'application/json'
  // };

  constructor(private http: HttpClient) { }

  // addNft(nft: INft): Observable<any> {
  //   const body = JSON.stringify(nft);
  //   const header = { 'content-type': 'application/x-www-form-urlencoded'};
  //   return this.http.post<any>("https://localhost:8000/nft/api/nft", body, {'headers': header})

  // }

  getAllNfts(): Observable<INft[]>{
    
    return this.http.get<INft[]>(this.url);
  }

  getNftById(id: number): Observable<INft>{
    return this.http.get<INft>('https://127.0.0.1:8000/nft/api/nft/' + id);
  }

  newNft(nft:INft) {
    return this.http.post<INft>('https://localhost:8000/nft/api/nft', nft);

  }

  getSixLastNaruto(): Observable<INft[]>{
    
    return this.http.get<INft[]>(this.urlNaruto);
  }

  
  createNft(nft: INft, token: string): Observable<any> {
    const body = JSON.stringify(nft);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.post<any>('https://127.0.0.1:8000/nft/api/nft', body, { headers });
  }
  
}
