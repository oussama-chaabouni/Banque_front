import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent implements OnInit {

  term: string;
  listTransactions:any;
  form:boolean=false;
  transaction!:Transaction;
  closeResult!: string;
  Virement_Immédiat: any="Virement_Immédiat";
  Virement_Différé: any="Virement_Différé";
  Virement_Permanent: any="Virement_Permanent";
  Dépot: any="Dépot";
  Retrait: any="Retrait";
  Paiement: any="Paiement";
  success: string="success";
  failed: string ="failed";
  transaction_type: ({ transaction_type: string } | { transaction_type: string } | { transaction_type: string } | { transaction_type: string } | { transaction_type: string } | { transaction_type: string })[];

  constructor(private transactionService: TransactionService, private modalService: NgbModal){ //,private toast:NgToastService

  }
  ngOnInit(): void {
    this.getTransactions();
    this.transaction= {

      idTransaction:null,

      rib:null,
      typeTransaction:null,
      montant:null,
      motif:null,
      statut:null,
      codeRaison:null,
      dateOperation:null,
      Solde:null,
    }

    this.transaction_type=[
      {transaction_type:"Virement_Immédiat"},
      {transaction_type:"Virement_Différé"},
      {transaction_type:"Virement_Permanent"},
      {transaction_type:"Dépot"},
      {transaction_type:"Retrait"},
      {transaction_type:"Paiement"}

    ]
  }

  getTransactions(){
    this.transactionService.getTransactions().subscribe(res=>this.listTransactions=res)
  }
  addTransaction(t:any) {
    this.transactionService.addTransaction(t).subscribe(()=> {
      this.getTransactions();
      this.form = false;
      //this.toast.success({detail:"Success Message", summary:"Transaction added Successfully", duration:5000})

    }, err=>{
      //this.toast.error({detail:"Error Message", summary:"Transaction Failed", duration:5000})
    })
  }

  editTransaction(transaction:Transaction){
    this.transactionService.editTransaction(transaction).subscribe();
    //this.toast.info({detail:"Success Message", summary:"Transaction edited Successfully", duration:5000})

  }

  deleteTransaction(transactionId:any){
    this.transactionService.deleteTransaction(transactionId).subscribe(()=>this.getTransactions());
   // this.toast.warning({detail:"Success Message", summary:"Transaction deleted Successfully", duration:5000})

  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
  closeForm(){

  }
  cancel(){
    this.form = false;
  }

  save(f: NgForm){ //f de type ngForm
    console.log(f.value['rib'],f.value['typeTransaction'], f.value['montant'],f.value['motif'], f.value['statut'],f.value['codeRaison'], f.value['dateOperation'], f.value['Solde']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)

  }

}
