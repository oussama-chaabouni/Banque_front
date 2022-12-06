import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) {

  }

  createOrder(order:any): Observable<any> {
    //http://localhost:8082/banque-en-ligne/pg/createOrder
    return this.http.post("http://localhost:8082/banque-en-ligne/pg/createOrder", {
      rib: order.rib,
      customerName: order.name,
      customerRib: order.customerRib,
      amount: order.amount,
      motif: order.motif,



      /*customerName: order.name,
      email: order.email,
      phoneNumber: order.phone,
      amount: order.amount */

    }, httpOptions);
    console.log("amounttt " +order.rib);
  }

}
