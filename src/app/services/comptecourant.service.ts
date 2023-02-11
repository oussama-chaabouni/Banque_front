import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn:'root'
})

// FEL SERVICE N7OT ASEMI LES ATTRIBUTS KIMA FEL SPRING , FEL COMPONNET NSAMMI KIAM NHEB LMOUHEM NAFS PARAMETRES
export class ComptecourantService {
  readonly apiServerUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
  }

  getComptecourants() {
    return this.http.get('http://localhost:8082/banque-en-ligne/comptecourant/retrieve-all-comptecourants');
  }

  addComptecourant(comptecourant: any) {
    return this.http.post('http://localhost:8082/banque-en-ligne/comptecourant/add-comptecourant', comptecourant);
  }

  editComptecourant(comptecourant: any) {
    return this.http.put('http://localhost:8082/banque-en-ligne/comptecourant/modify-comptecourant', comptecourant);
  }

  deleteComptecourant(idCompteCourant: any) {
    return this.http.delete('http://localhost:8082/banque-en-ligne/comptecourant/remove-transaction/' + idCompteCourant);
  }





}
