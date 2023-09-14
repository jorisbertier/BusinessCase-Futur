import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { INft, resultNft } from './nft.interface';
import { FormGroup } from '@angular/forms';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NftService {

  url = "https://127.0.0.1:8000/nft/api/nft";
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

  newNft(nft:INft): Observable<any>  {
    // const body = JSON.stringify(nft);
    // const header = { 'content-type': 'application/json'};
    // return this.http.post<INft>('https://127.0.0.1:8000/nft/api/new/', body, {'headers': header});
    return this.http.post<INft>('https://127.0.0.1:8000/nft/api/new/', nft);
  }

}
