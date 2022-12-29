export class Transaction {

  idTransaction!:any;

  rib!:any;
  beneficiairerib!:any;
  typeTransaction!:any;
  montant!:any;
  motif!:any;
  statut!:any;
  codeRaison!:any;
  dateOperation!:any;

}
//FRONT
export interface CashFLowModel{
  openModal: boolean
  transactionObject :transactionObject
}

export interface transactionObject {
  fromAccount:string
  toAccount:string
  amount:number
}
