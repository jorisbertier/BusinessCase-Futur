import { Injectable } from '@angular/core';
import { IEth } from '../../interface/eth/eth.interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EthService {

  url = "https://127.0.0.1:8000/eth/api/eth";
  urlOne = "https://127.0.0.1:8000/eth/api/eth/one";
  urlYesterdayPrice = "https://127.0.0.1:8000/eth/api/eth/two";

  constructor(private http: HttpClient) { }

  getPriceEthLastSevenWeek(): Observable<IEth[]>{
    return this.http.get<IEth[]>(this.url);
  }

  getActualPriceEth(): Observable<any>{
    return this.http.get<IEth[]>(this.urlOne);
  }

  getYesterdayPriceEth(): Observable<any>{
    return this.http.get<IEth[]>(this.urlYesterdayPrice);
  }
}
