import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn:'root'
})

// FEL SERVICE N7OT ASEMI LES ATTRIBUTS KIMA FEL SPRING , FEL COMPONNET NSAMMI KIAM NHEB LMOUHEM NAFS PARAMETRES
export class CompteepargneService {
  readonly apiServerUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
  }

  getCompteepargnes() {
    return this.http.get('http://localhost:8082/banque-en-ligne/compteepargne/retrieve-all-compteepargnes');
  }

  addCompteepargne(compteepargne: any) {
    return this.http.post('http://localhost:8082/banque-en-ligne/compteepargne/add-compteepargne', compteepargne);
  }

  editCompteepargne(compteepargne: any) {
    return this.http.put('http://localhost:8082/banque-en-ligne/compteepargne/modify-compteepargne', compteepargne);
  }

  deleteCompteepargne(idCompteEpargne: any) {
    return this.http.delete('http://localhost:8082/banque-en-ligne/compteepargne/remove-transaction/' + idCompteEpargne);
  }

  SimulateurEpargneMensuel(capitalinitial: any,versementmensuel:any,rendementannuel:any,dureeepargne:any) {
    //http://localhost:8082/banque-en-ligne/compteepargne/simulateurEpargneMensuel?capitalinitial=5000&versementmensuel=1700&rendementannuel=4.5&dureeepargne=10
    return this.http.get("http://localhost:8082/banque-en-ligne/compteepargne/simulateurEpargneMensuel?capitalinitial="+capitalinitial+"&versementmensuel="+versementmensuel+"&rendementannuel="+rendementannuel+"&dureeepargne="+dureeepargne, { responseType: 'text'});
  }

  SimulateurEpargneTrimestriel(capitalinitial: any,versementtrimestriel:any,rendementannuel:any,dureeepargne:any) {
    //http://localhost:8082/banque-en-ligne/compteepargne/simulateurEpargneTrimestriel?capitalinitial=5000&versementmensuel=1700&rendementannuel=4.5&dureeepargne=10
    return this.http.get("http://localhost:8082/banque-en-ligne/compteepargne/simulateurEpargneTrimestriel?capitalinitial="+capitalinitial+"&versementmensuel="+versementtrimestriel+"&rendementannuel="+rendementannuel+"&dureeepargne="+dureeepargne, { responseType: 'text'});
  }

  SimulateurEpargneSemestriel(capitalinitial: any,versementsemestriel:any,rendementannuel:any,dureeepargne:any) {
    //http://localhost:8082/banque-en-ligne/compteepargne/simulateurEpargneTrimestriel?capitalinitial=5000&versementmensuel=1700&rendementannuel=4.5&dureeepargne=10
    return this.http.get("http://localhost:8082/banque-en-ligne/compteepargne/simulateurEpargneSemestriel?capitalinitial="+capitalinitial+"&versementmensuel="+versementsemestriel+"&rendementannuel="+rendementannuel+"&dureeepargne="+dureeepargne, { responseType: 'text'});
  }




}
