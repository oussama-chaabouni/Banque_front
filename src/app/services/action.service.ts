import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActionService {

  readonly API_URL = 'http://localhost:8082/banque-en-ligne/action';

  constructor(private httpClient: HttpClient) {
  }

  getAllActions() {
    return this.httpClient.get(`${this.API_URL}/retrieve-all-actions`);
  }

  addAction(Action: any, idCompte: any) {
    return this.httpClient.post(` ${this.API_URL}/add-action/${idCompte}`, Action);
  }
  deleteAction(idAction: any) {
    return this.httpClient.delete(` ${this.API_URL}/delete-action/${idAction}`);
  }
  sellAction(idAction: any) {
    return this.httpClient.delete(` ${this.API_URL}/sell-action/${idAction}`);
  }
  retrieveCompteTitre(idAction: any) {
    return this.httpClient.get(` ${this.API_URL}/retrieve-titre/${idAction}`);
  }
  VarTheorique(Year: any,Time: any,confiance: any) {
    return this.httpClient.get(` ${this.API_URL}/VarTheorique?year=${Year}&time=${Time}&confiance=${confiance}`);
  }

  VarHistorique(Year: any,Time: any,confiance: any) {
    return this.httpClient.get(` ${this.API_URL}/VarHistorique?year=${Year}&time=${Time}&confiance=${confiance}`);
  }
}
