import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ObligationService {

  readonly API_URL = 'http://localhost:8082/banque-en-ligne/obligation';

  constructor(private httpClient: HttpClient) {
  }

  getAllObligations() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-obligation`);
  }

  simulationReturn(prixOblig: any,maturite: any,coupon: any,interet: any,freqPaiement: any,freqCoupon: any) {
    return this.httpClient.get(` ${this.API_URL}/obligationSimulation?prixOblig=${prixOblig}&maturite=${maturite}&coupon=${coupon}&interet=${interet}&freqPaiement=${freqPaiement}&freqCoupon=${freqCoupon}`,{responseType:"text"});
  }
}
