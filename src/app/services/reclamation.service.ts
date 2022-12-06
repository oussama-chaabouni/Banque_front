import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  readonly apiServerUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
  }

  getReclamations() {
    return this.http.get('http://localhost:8082/banque-en-ligne/reclamation/retrieve-all-reclamations');
  }

  addReclamation(reclamation: any) {
    return this.http.post('http://localhost:8082/banque-en-ligne/reclamation/add-reclamation', reclamation);
  }

  editReclamation(reclamation: any) {
    return this.http.put('http://localhost:8082/banque-en-ligne/reclamation/modify-reclamation', reclamation);
  }

  deleteReclamation(idReclamation: any) {
    return this.http.delete('http://localhost:8082/banque-en-ligne/reclamation/remove-reclamation/' + idReclamation);
  }
}
