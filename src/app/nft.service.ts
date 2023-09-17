import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
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
  
}
