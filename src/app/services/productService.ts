import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
 @Injectable({
  providedIn: 'root'
})



export class productservice {
  readonly API_URL = 'http://localhost:8093';
  
  constructor(private httpClient: HttpClient) { }

  retrieveAllProduct() {
    return this.httpClient.get(`${this.API_URL}/product/select`)
  }
  batch() {
    return this.httpClient.post(`${this.API_URL}/product/batch`,null)
  }
  addProduct(product : any) {
    return this.httpClient.post(`${this.API_URL}/product/add`, product)
  }
  updateProduct(product : any){
    return this.httpClient.put(`${this.API_URL}/product/modifyProduct`, product)
  }
  removeProduct(id : any){
    return  this.httpClient.delete(`${this.API_URL}/product/delete/${id}`)
  }

}