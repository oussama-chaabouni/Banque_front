import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { conge } from '../models/conge';

@Injectable({
  providedIn: 'root'
})
export class CongeService {
  readonly API_URL = 'http://localhost:8082/banque-en-ligne/Conge';

  constructor(private httpClient: HttpClient) {
  }

  getConges() {
    return this.httpClient.get("http://localhost:8082/banque-en-ligne/Conge/retrieve-all-conges");
  }


  addconge(idEmploye: string, conge : any) {
   
    return this.httpClient.post('http://localhost:8082/banque-en-ligne/Conge/add-conge/'+idEmploye, conge)
    }

    editconge(conge : any){
      return this.httpClient.put('http://localhost:8082/banque-en-ligne/Conge/modify-conge', conge)
      }

      acceptConge(conge : any, idConge : number){
        const id = typeof conge=== 'number' ? conge: conge.idConge;
        return this.httpClient.put('http://localhost:8082/banque-en-ligne/Conge/accept'+id, conge)
        }

      deleteConge(conge: conge| number) {
        const id = typeof conge=== 'number' ? conge: conge.idConge;
        const url='http://localhost:8082/banque-en-ligne/Conge/remove-Conge/'+id;
        return this.httpClient.delete(url);
        }





}