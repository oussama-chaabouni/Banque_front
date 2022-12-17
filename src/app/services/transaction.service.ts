import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Subject} from "rxjs";
import {CashFLowModel, transactionObject} from "../models/transaction";

@Injectable({
  providedIn:'root'
})

// FEL SERVICE N7OT ASEMI LES ATTRIBUTS KIMA FEL SPRING , FEL COMPONNET NSAMMI KIAM NHEB LMOUHEM NAFS PARAMETRES
export class TransactionService {
  readonly apiServerUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {
  }

  getTransactions() {
    return this.http.get('http://localhost:8082/banque-en-ligne/transaction/retrieve-all-transactions');
  }

  addTransaction(transaction: any) {
    return this.http.post('http://localhost:8082/banque-en-ligne/transaction/add-transaction', transaction);
  }

  editTransaction(transaction: any) {
    return this.http.put('http://localhost:8082/banque-en-ligne/transaction/modify-transaction', transaction);
  }

  deleteTransaction(idTransaction: any) {
    return this.http.delete('http://localhost:8082/banque-en-ligne/transaction/remove-transaction/' + idTransaction);
  }

  getSoldeCompteCourant(rib: any){
    return this.http.get('http://localhost:8082/banque-en-ligne/transaction/getSoldeCompteCourant'+rib);
  }

  ChangeSoldeCompteCourantByRib(newBalance:any , rib:any){
    return this.http.put('http://localhost:8082/banque-en-ligne/transaction/ChangeSoldeCompteCourantByRib', +newBalance +rib);

  }

  transactionSubject = new Subject()
  $transactionSubject = this.transactionSubject.asObservable()

  approveTransactionSubject = new Subject()
  $approveTransactionSubject = this.approveTransactionSubject.asObservable()
  sendMoneyAction(value : CashFLowModel){
    this.transactionSubject.next(value)
  }

  approveTransaction(value : transactionObject){
    this.approveTransactionSubject.next(value)
  }
  virementImmediat(transferFromRib: any,transferToRib:any,transfer_amount:any,motif:any) {
    /*bech ya9rali les retours de type string 5ater 93ad ytala3Li f err */
    var body =[{}]  ;        //http://localhost:8082/banque-en-ligne/transaction/transfer?transferFromRib=1233333&transferToRib=1232222&transfer_amount=10&motif=cadeau
    return this.http.post("http://localhost:8082/banque-en-ligne/transaction/transfer?transferFromRib="+transferFromRib+"&transferToRib="+transferToRib+"&transfer_amount="+transfer_amount+"&motif="+motif,body,{ responseType: 'text' });
  }


  virementImmediatEpargne(transferFromRib: any,transferToRib:any,transfer_amount:any,motif:any) {
    /*bech ya9rali les retours de type string 5ater 93ad ytala3Li f err */
    var body =[{}]  ;        //http://localhost:8082/banque-en-ligne/transaction/transfer?transferFromRib=1233333&transferToRib=1232222&transfer_amount=10&motif=cadeau
    return this.http.post("http://localhost:8082/banque-en-ligne/transaction/transferEpargne?transferFromRib="+transferFromRib+"&transferToRib="+transferToRib+"&transfer_amount="+transfer_amount+"&motif="+motif,body,{ responseType: 'text' });
  }

  transferFromCompteCourantToCompteEpargne(transferFromRib: any,transferToRib:any,transfer_amount:any,motif:any) {
    /*bech ya9rali les retours de type string 5ater 93ad ytala3Li f err */
    var body =[{}]  ;        //http://localhost:8082/banque-en-ligne/transaction/transferFromCompteCourantToCompteEpargne?transferFromRib=1235&transferToRib=1232222&transfer_amount=2&motif=n
    return this.http.post("http://localhost:8082/banque-en-ligne/transaction/transferFromCompteCourantToCompteEpargne?transferFromRib="+transferFromRib+"&transferToRib="+transferToRib+"&transfer_amount="+transfer_amount+"&motif="+motif,body,{ responseType: 'text' });
  }

  transferFromCompteEpargneToCompteCourant(transferFromRib: any,transferToRib:any,transfer_amount:any,motif:any) {
    /*bech ya9rali les retours de type string 5ater 93ad ytala3Li f err */
    var body =[{}]  ;        //http://localhost:8082/banque-en-ligne/transaction/transferFromCompteEpargneToCompteCourant?transferFromRib=1235&transferToRib=1232222&transfer_amount=2&motif=n
    return this.http.post("http://localhost:8082/banque-en-ligne/transaction/transferFromCompteEpargneToCompteCourant?transferFromRib="+transferFromRib+"&transferToRib="+transferToRib+"&transfer_amount="+transfer_amount+"&motif="+motif,body,{ responseType: 'text' });
  }





  virementDiffere(JobData: any) {
    /*bech ya9rali les retours de type string 5ater 93ad ytala3Li f err */
    var body =[{}]  ;        //http://localhost:8082/banque-en-ligne/transaction/scheduleVirementDiffere
    return this.http.post('http://localhost:8082/banque-en-ligne/transaction/scheduleVirementDiffere', JobData);
  }
  virementDiffereEpargne(JobData: any) {
    /*bech ya9rali les retours de type string 5ater 93ad ytala3Li f err */
    var body =[{}]  ;        //http://localhost:8082/banque-en-ligne/transaction/scheduleVirementDiffereEpargne
    return this.http.post('http://localhost:8082/banque-en-ligne/transaction/scheduleVirementDiffereEpargne', JobData);
  }

  virementPermanent(JobDataVirementPermanent:any) {
    /*bech ya9rali les retours de type string 5ater 93ad ytala3Li f err */
    var body =[{}]  ;        //http://localhost:8082/banque-en-ligne/transaction/scheduleVirementpermanent
    return this.http.post('http://localhost:8082/banque-en-ligne/transaction/scheduleVirementpermanent', JobDataVirementPermanent);
  }
  virementPermanentEpargne(JobDataVirementPermanent:any) {
    /*bech ya9rali les retours de type string 5ater 93ad ytala3Li f err */
    var body =[{}]  ;        //http://localhost:8082/banque-en-ligne/transaction/scheduleVirementpermanentEpargne
    return this.http.post('http://localhost:8082/banque-en-ligne/transaction/scheduleVirementpermanentEpargne', JobDataVirementPermanent);
  }

  retrait(retrait_amount: any,monRib:any) {
    var body =[{}]  ;
    //http://localhost:8082/banque-en-ligne/transaction/retrait?retrait_amount=10&monRib=1233333
    console.log("xxxx "+retrait_amount);
    console.log("xxxx "+monRib.toString());
    return this.http.post("http://localhost:8082/banque-en-ligne/transaction/retrait?retrait_amount="+retrait_amount+"&monRib="+monRib,body,{ responseType: 'text' });
  }
  retraitEpargne(retrait_amount: any,monRib:any) {
    var body =[{}]  ;
    //http://localhost:8082/banque-en-ligne/transaction/retraitEpargne?retrait_amount=1&monRib=1234
    console.log("xxxx "+retrait_amount);
    console.log("xxxx "+monRib.toString());
    return this.http.post("http://localhost:8082/banque-en-ligne/transaction/retraitEpargne?retrait_amount="+retrait_amount+"&monRib="+monRib,body,{ responseType: 'text' });
  }


  depot(monRib: any,deposit_amount:any) {
    var body =[{}]  ;
    //http://localhost:8082/banque-en-ligne/transaction/depot?deposit_amount=10&monRib=1233333
    return this.http.post("http:///localhost:8082/banque-en-ligne/transaction/depot?deposit_amount="+deposit_amount+"&monRib="+monRib,body.toString(),{ responseType: 'text' });
  }
  depotEpargne(monRib: any,deposit_amount:any) {
    var body =[{}]  ;
    //http://localhost:8082/banque-en-ligne/transaction/depotEpargne?deposit_amount=10&monRib=1233333
    return this.http.post("http:///localhost:8082/banque-en-ligne/transaction/depotEpargne?deposit_amount="+deposit_amount+"&monRib="+monRib,body.toString(),{ responseType: 'text' });
  }

  paiement(beneficiaire: any,beneficiaire_rib:any,monRib:any,motif:any,montant:any) {
    var body =[{}]  ;
    //http://localhost:8082/banque-en-ligne/transaction/payement?beneficiaire=ESPRIT&beneficiaire_rib=12345653423&monRib=1232222&motif=paiement%20ecole&montant=500
    return this.http.post("http://localhost:8082/banque-en-ligne/transaction/payement?beneficiaire="+beneficiaire+"&beneficiaire_rib="+beneficiaire_rib+"&monRib="+monRib+"&motif="+motif+"&montant="+montant,body,{ responseType: 'text' });
  }
  paiementEpargne(beneficiaire: any,beneficiaire_rib:any,monRib:any,motif:any,montant:any) {
    var body =[{}]  ;
    //http://localhost:8082/banque-en-ligne/transaction/payementEpargne?beneficiaire=ESPRIT&beneficiaire_rib=12345653423&monRib=1232222&motif=paiement%20ecole&montant=500
    return this.http.post("http://localhost:8082/banque-en-ligne/transaction/payementEpargne?beneficiaire="+beneficiaire+"&beneficiaire_rib="+beneficiaire_rib+"&monRib="+monRib+"&motif="+motif+"&montant="+montant,body,{ responseType: 'text' });
  }

  //byUserConnecte
  retrievelisttransactionsByRib (rib:any) {
    //http://localhost:8082/banque-en-ligne/transaction/retrievelisttransactionsByUserName?rib=1233333
    return this.http.get('http://localhost:8082/banque-en-ligne/transaction/retrievelisttransactionsByUserName?rib='+rib);
  }


  nameOfUserByRib(rib:any) {
//http://localhost:8082/banque-en-ligne/transaction/GetNomClientParRib/1232222
    console.log("yyyyy "+rib);
return this.http.get("http://localhost:8082/banque-en-ligne/transaction/GetNomClientParRib/"+rib, { responseType: 'text'});
  }

  nameOfUserByRibEpargne(rib:any) {
//http://localhost:8082/banque-en-ligne/transaction/GetNomClientParRibEpargne/1235
    console.log("yyyyy "+rib);
    return this.http.get("http://localhost:8082/banque-en-ligne/transaction/GetNomClientParRibEpargne/"+rib, { responseType: 'text'});
  }


  SimulateurAgios(montantdudecouvert:any,dureedudecouvert:any)	{
    var body =[{}]  ;
                          //http://localhost:8082/banque-en-ligne/transaction/simulateurAgios?montantdudecouvert=897&dureedudecouvert=23
  return this.http.get("http://localhost:8082/banque-en-ligne/transaction/simulateurAgios?montantdudecouvert="+montantdudecouvert+"&dureedudecouvert="+dureedudecouvert);
  }

  getTotalAgios(){
    return this.http.get("http://localhost:8082/banque-en-ligne/transaction/GetLastTotalAgios");
  }


  getcheque(montant:any,image:any){
    var body =[{}]  ;

    //http://localhost:8082/banque-en-ligne/transaction/payementcheque?montant=650000000&image=kkk
    return this.http.get("http://localhost:8082/banque-en-ligne/transaction/payementcheque?montant="+montant+"&image="+image , { responseType: 'text'});
  }




}
