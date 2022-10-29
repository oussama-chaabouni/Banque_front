import { Injectable } from '@angular/core';

import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { credits } from '../entities/Credits';

import { catchError, map } from 'rxjs/operators';
import { ReponseMessage } from '../entities/ReponseMessage';

@Injectable({
  providedIn: 'root'
})
export class CreditService {
  readonly API_URL = 'http://localhost:9191';
  
  constructor(private httpClient: HttpClient) { }

  getAllCredits() : Observable<credits[]>  {  
  return this.httpClient.get<credits[]>(`${this.API_URL}/credits/select`);//.pipe(map(data => data), catchError(this.handleError));
     
  }
  addCredit(c: any) {
    return this.httpClient.post(`${this.API_URL}/credits/add`, c)
  }
  
  editCredit(c: any){
    return this.httpClient.put(`${this.API_URL}/credits/edit`, c)
  }
  acceptCredit(id: any){
    return this.httpClient.put(`${this.API_URL}/credits/accept/${id}`,null )
  }
  reject(id: any){
    return this.httpClient.put(`${this.API_URL}/credits/reject/${id}`,null )
  }
  deleteCredit(id  : any){
    return  this.httpClient.delete(`${this.API_URL}/credits/delete/${id}`)
  }
  private handleError(res: HttpErrorResponse | any) {
    console.error(res.error || res.body.error);
    return observableThrowError(res.error || 'Server error');
  }
  simulate(c: any) : any{
    return this.httpClient.post  (`${this.API_URL}/credits/sim`, c)
  }
  
}
