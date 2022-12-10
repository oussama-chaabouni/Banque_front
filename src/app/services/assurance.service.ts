import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { assurance } from '../models/assurance';


@Injectable({
  providedIn: 'root'
})
export class AssuranceService {

  constructor(private httpClient: HttpClient) { 
  }
  getAssurances() {
    return this.httpClient.get("http://localhost:8082/banque-en-ligne/Conge/retrieve-all-conges");
  }
   
    addassurance(assurance : any) {
   
      return this.httpClient.post('http://localhost:8082/banque-en-ligne/Assurance/add-assurance',assurance)
      }

      suggest( id : any){
      const headers = new HttpHeaders();
      headers.append('Content-Type', 'application/json');
        return this.httpClient.get('http://localhost:8082/banque-en-ligne/Assurance/sugg/'+id,{responseType: 'text'})
        }

  }

