import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";
import {CashFLowModel, transactionObject} from "../models/transaction";

@Injectable({
  providedIn:'root'
})

// FEL SERVICE N7OT ASEMI LES ATTRIBUTS KIMA FEL SPRING , FEL COMPONNET NSAMMI KIAM NHEB LMOUHEM NAFS PARAMETRES
export class FormulairesouscriptionService {
  readonly apiServerUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
  }

  getFormulairesouscriptionbacks() {
    return this.http.get('http://localhost:8082/banque-en-ligne/formulairesouscription/retrieve-all-formulairesouscriptions');
  }

  addFormulairesouscriptionback(formulairesouscription: any) {
    return this.http.post('http://localhost:8082/banque-en-ligne/formulairesouscription/add-formulairesouscription', formulairesouscription);
  }

  editFormulairesouscriptionback(formulairesouscription: any) {
    return this.http.put('http://localhost:8082/banque-en-ligne/formulairesouscription/modify-formulairesouscription', formulairesouscription);
  }

  deleteFormulairesouscriptionback(id: any) {
    return this.http.delete('http://localhost:8082/banque-en-ligne/formulairesouscription/remove-formulairesouscription/' + id);
  }

  formulairesouscription(titredecivilite:any, nom:any,prenom:any,datenaissance: any,numero: any, email: any,titredecivilitetuteur: any, nomtuteur: any,prenomtuteur: any, datenaissancetuteur: any,numerotuteur: any, emailtuteur: any,pieceditentite: any,justificatifdedomicile: any, depotinitial: any){
    //http://localhost:8082/banque-en-ligne/formulairesouscription/formulairesouscription?titredecivilite=M&nom=a&prenom=a&datenaissance=2022%2F01%2F01&numero=1&email=a&titredecivilitetuteur=M&nomtuteur=a&prenomtuteur=a&datenaissancetuteur=2022%2F01%2F01&numerotuteur=1&emailtuteur=a&pieceditentite=a&justificatifdedomicile=a&depotinitial=1
    return this.http.post("http://localhost:8082/banque-en-ligne/formulairesouscription/formulairesouscription?titredecivilite="+titredecivilite+"&nom="+nom+"&prenom="+prenom+"&datenaissance="+datenaissance+"&numero="+numero+"&email="+email+"&titredecivilitetuteur="+titredecivilitetuteur+"&nomtuteur="+nomtuteur+"&prenomtuteur="+prenomtuteur+"&datenaissancetuteur="+datenaissancetuteur+"&numerotuteur="+numerotuteur+"&emailtuteur="+emailtuteur+"&pieceditentite="+pieceditentite+"&justificatifdedomicile="+justificatifdedomicile+"&depotinitial="+depotinitial, { responseType: 'text'});
  }


}
