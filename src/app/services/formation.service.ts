import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";
import {CashFLowModel} from "../models/transaction";

@Injectable({
  providedIn:'root'
})

// FEL SERVICE N7OT ASEMI LES ATTRIBUTS KIMA FEL SPRING , FEL COMPONNET NSAMMI KIAM NHEB LMOUHEM NAFS PARAMETRES
export class FormationService {
  readonly apiServerUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
  }

  getFormations() {
    return this.http.get('http://localhost:8082/banque-en-ligne/formation/retrieve-all-formations');
  }

  getFormationsDetails() {
    //  http://localhost:8082/banque-en-ligne/formation/retrieve-all-formations-details
    return this.http.get('http://localhost:8082/banque-en-ligne/formation/retrieve-all-formations-details');
  }

  addFormation(formation: any) {
    return this.http.post('http://localhost:8082/banque-en-ligne/formation/add-formation', formation);
  }

  editFormation(formation: any) {
    return this.http.put('http://localhost:8082/banque-en-ligne/formation/modify-formation', formation);
  }

  deleteFormation(id: any) {
    return this.http.delete('http://localhost:8082/banque-en-ligne/formation/remove-formation/' + id);
  }


  formationSubject = new Subject()
  $formationSubject = this.formationSubject.asObservable()

  approveFormationSubject = new Subject()
  $approveFormationSubject = this.approveFormationSubject.asObservable()
  sendMoneyAction(value : CashFLowModel){
    this.formationSubject.next(value)
  }


  ParticiperFormation(id:any, idp:any ){
    console.log("id formation: "+id);
    var body =[{}]  ;
    //http://localhost:8082/banque-en-ligne/formation/participer/2/1
    return this.http.post("http:///localhost:8082/banque-en-ligne/formation/participer/"+id+"/"+idp,body,{ responseType: 'text' });

  }

  findallMyformation(idp:any){
    //http://localhost:8082/banque-en-ligne/formation/findallMyFormation/1
    return this.http.get("http://localhost:8082/banque-en-ligne/formation/findallMyFormation/"+idp);

  }

  afficherEmployesParticipants(id: any) {
    //http://localhost:8082/banque-en-ligne/formation/afficherEmployesParticipant/1
    return this.http.get("http://localhost:8082/banque-en-ligne/formation/afficherEmployesParticipant/"+id);

  }

  desincrireFormation(idp:any,id:any){
    //http://localhost:8082/banque-en-ligne/formation/desinscrire/1/2
    return this.http.delete("http://localhost:8082/banque-en-ligne/formation/desinscrire/"+idp+"/"+id);
  }




}
