import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Client} from "../models/client";
import {Observable} from "rxjs";
import {Agent} from "../models/agent";

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  readonly API_URL = 'http://localhost:8082/banque-en-ligne/auth';

  constructor(private httpClient: HttpClient) {
  }

  login(email: string, password: string) : Observable<any> {
    return this.httpClient.get(this.API_URL+"/login",{params:{email:email,password:password}});
  }
  login2(email: string, password: string) : Observable<any> {
    return this.httpClient.get(this.API_URL+"/loginAgent",{params:{email:email,password:password}});
  }

  register(C:Client,image:any){
    const headers = new HttpHeaders().set('Content-Type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW');
    let formData = new FormData();
    formData.append("image", image, image.name);
    formData.append("customer", JSON.stringify(C));
    return this.httpClient.post(this.API_URL+"/addCustomer",formData,{ headers: headers });
  }

  register2(C:Client){
    return this.httpClient.post(this.API_URL+"/addCustomer",C);
  }
  register3(C:Agent){
    return this.httpClient.post(this.API_URL+"/addEmploye",C);
  }
  verifyEmail(email:any){
    return this.httpClient.get<Number>(this.API_URL+"/verifyEmail",{params:{email:email}})
  }

  verifyUsername(username:any){
    return this.httpClient.get<Number>(this.API_URL+"/verifyUsername",{params:{username:username}})
  }
}
