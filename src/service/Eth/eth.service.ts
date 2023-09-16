import { Injectable } from '@angular/core';
import { IEth } from '../../interface/eth/eth.interface';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { FormGroup } from '@angular/forms';
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EthService {

  url = "https://127.0.0.1:8000/eth/api/eth";
  urlOne = "https://127.0.0.1:8000/eth/api/eth/one";

  constructor(private http: HttpClient) { }

  getPriceEthLastSevenWeek(): Observable<IEth[]>{
    return this.http.get<IEth[]>(this.url);
  }

  getActualPriceEth(): Observable<any>{
    return this.http.get<IEth[]>(this.urlOne);
  }
}
