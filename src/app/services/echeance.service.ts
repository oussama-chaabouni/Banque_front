import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EcheanceService {
  readonly API_URL = 'http://localhost:8082/banque-en-ligne/echeance';

  constructor(private httpClient: HttpClient) {
  }

  getAllDetailLoans() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-echeances`);
  }

  getSim(idCredit: any, m: any, i: any) {
    return this.httpClient.get(`${this.API_URL}/creditSimulation?capital=${idCredit}&mois=${m}&interest=${i}`,{responseType:"text"});
  }

  addDetailLoan(idLoan: any, Echeance: any) {
    return this.httpClient.post(` ${this.API_URL}/tableauamortissement/${idLoan}`, Echeance);
  }
  
}
