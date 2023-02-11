import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credit } from '../models/credit';

@Injectable({
  providedIn: 'root'
})
export class CreditService {

  readonly API_URL = 'http://localhost:8082/banque-en-ligne/credit';

  constructor(private httpClient: HttpClient) {
  }


  addLoan(Loan: any, idLoan: any) {
    return this.httpClient.post(` ${this.API_URL}/add-loan/${idLoan}`, Loan);
  }

  getAllCredits()  {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-credits`);
  }



  acceptLoan(idLoan: any, Loan: any) {
    return this.httpClient.put(` ${this.API_URL}/acceptLoanRequest/${idLoan}`, Loan);
  }

  denyLoan(idLoan: any, Loan: any) {
    return this.httpClient.put(` ${this.API_URL}/denyLoanRequest/${idLoan}`, Loan);
  }
  getAllImages(id: any){
    return this.httpClient.get(`http://localhost:8082/banque-en-ligne/auth/getImage?id=1`);
  }
  getAllCreditsbyClient(idClient:any)  {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-credits-by-client/${idClient}`);
  }
}
