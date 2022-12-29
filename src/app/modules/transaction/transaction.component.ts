import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

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
  Virement_Immediat: any="Virement_Immédiat";
  Virement_Differe: any="Virement_Différé";
  Virement_Permanent: any="Virement_Permanent";
  Depot: any="Dépot";
  Retrait: any="Retrait";
  Paiement: any="Paiement";
  successdepot: string="dépot avec succés";
  faileddepot: string ="dépot sans succés";
  successretrait: string="retrait avec succés";
  failedretrait: string="retrait sans succés";
  successpaiement: string="Paiement avec Succés";
  failedpaiement: string="Echec de Paiement";
  successvir_imm: string="virement immédiat effectué avec succès";
  failedvir_imm: string="Echec du virement immédiat";
  successvir_dif: string="virement différé effectué avec succès";
  successvir_per: string="virement Permanent effectué avec succès";

  transaction_type: ({ transaction_type: string } | { transaction_type: string } | { transaction_type: string } | { transaction_type: string } | { transaction_type: string } | { transaction_type: string })[];

  constructor(private transactionService: TransactionService, private modalService: NgbModal){ //,private toast:NgToastService

  }


  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.getTransactions();
    this.transaction= {

      idTransaction:null,

      rib:null,
      beneficiairerib:null,
      typeTransaction:null,
      montant:null,
      motif:null,
      statut:null,
      codeRaison:null,
      dateOperation:null
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

  deleteTransaction(idTransaction:any){
    this.transactionService.deleteTransaction(idTransaction).subscribe(()=>this.getTransactions());
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
    console.log(f.value['rib'],f.value['beneficiairerib'],f.value['typeTransaction'], f.value['montant'],f.value['motif'], f.value['statut'],f.value['codeRaison'], f.value['dateOperation']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)

  }

}
