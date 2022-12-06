import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";

@Injectable({
  providedIn:'root'
})

// FEL SERVICE N7OT ASEMI LES ATTRIBUTS KIMA FEL SPRING , FEL COMPONNET NSAMMI KIAM NHEB LMOUHEM NAFS PARAMETRES
export class SalaireService {
  readonly apiServerUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
  }

  getSalaires() {
    return this.http.get('http://localhost:8082/banque-en-ligne/salaire/retrieve-all-salaires');
  }

  addSalaire(salaire: any) {
    return this.http.post('http://localhost:8082/banque-en-ligne/salaire/add-salaire', salaire);
  }

  editSalaire(salaire: any) {
    return this.http.put('http://localhost:8082/banque-en-ligne/salaire/modify-salaire', salaire);
  }

  deleteSalaire(idSalaire: any) {
    return this.http.delete('http://localhost:8082/banque-en-ligne/salaire/remove-salaire/' + idSalaire);
  }

}
