import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
 import { Observable } from 'rxjs';
import { Guarantor } from '../entities/guarantor';
@Injectable({
  providedIn: 'root'
})



export class GuarantorService {
  readonly API_URL = 'http://localhost:9191';
  
  constructor(private httpClient: HttpClient) { }

  retrieveAllGuarantors() : Observable<Guarantor[]> {
    return this.httpClient.get<Guarantor[]>(`${this.API_URL}/garantor/select`)
  }
  add (g : Guarantor) {
    return this.httpClient.post(`${this.API_URL}/garantor/add`, g)
  }
  updateGuarantor(g : Guarantor){
    return this.httpClient.put(`${this.API_URL}/garantor/modifyguarantor`, g)
  }
  removeGuarantor(id : any){
    return  this.httpClient.delete(`${this.API_URL}/garantor/delete/${id}`)
  }
  pdf(id : any){
    return  this.httpClient.get(`${this.API_URL}/repayment/export/pdf/${id}`, { responseType: 'blob' }) 
  }
  

}