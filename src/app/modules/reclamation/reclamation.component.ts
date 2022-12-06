import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../models/transaction";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Reclamation} from "../../models/reclamation";
import {ReclamationService} from "../../services/reclamation.service";

@Component({
  selector: 'app-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit {

  term: string;
  listReclamations:any;
  form:boolean=false;
  transaction:Transaction[]=[];
  reclamation!:Reclamation;
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

  constructor(private reclamationService: ReclamationService, private modalService: NgbModal){

  }
  ngOnInit(): void {
    this.getReclamations();
    this.reclamation= {

      idReclamation:null,

      rib:null,
      typeTransaction:null,
      montant:null,
      motif:null,
      statut:null,
      codeRaison:null,
      dateOperation:null,
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

  getReclamations(){
    this.reclamationService.getReclamations().subscribe(res=>this.listReclamations=res)
  }
  addReclamation(t:any) {
    this.reclamationService.addReclamation(t).subscribe(()=> {
      this.getReclamations();
      this.form = false;
      //this.toast.success({detail:"Success Message", summary:"Transaction added Successfully", duration:5000})

    }, err=>{
      //this.toast.error({detail:"Error Message", summary:"Transaction Failed", duration:5000})
    })
  }

  editReclamation(reclamation:Reclamation){
    this.reclamationService.editReclamation(reclamation).subscribe();
    //this.toast.info({detail:"Success Message", summary:"Transaction edited Successfully", duration:5000})

  }

  deleteReclamation(idReclamation:any){
    this.reclamationService.deleteReclamation(idReclamation).subscribe(()=>this.getReclamations());
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
    console.log(f.value['rib'],f.value['typeTransaction'], f.value['montant'],f.value['motif'], f.value['statut'],f.value['codeRaison'], f.value['dateOperation']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)
  }

}
