import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PayementService {

  readonly apiServerUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
  }

  getPayements() {
    return this.http.get('http://localhost:8082/banque-en-ligne/payement/retrieve-all-payements');
  }

  addPayement(payement: any) {
    return this.http.post('http://localhost:8082/banque-en-ligne/payement/add-payement', payement);
  }

  editPayement(payement: any) {
    return this.http.put('http://localhost:8082/banque-en-ligne/payement/modify-payement', payement);
  }

  deletePayement(payementId: any) {
    return this.http.delete('http://localhost:8082/banque-en-ligne/payement/remove-payement/' + payementId);
  }
}
