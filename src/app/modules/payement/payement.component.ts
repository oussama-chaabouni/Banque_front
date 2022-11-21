import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {PayementService} from "../../services/payement.service";
import {Payement} from "../../models/payement";
import {Reclamation} from "../../models/reclamation";

@Component({
  selector: 'app-payement',
  templateUrl: './payement.component.html',
  styleUrls: ['./payement.component.scss']
})
export class PayementComponent implements OnInit {

  term: string;
  listPayements:any;
  form:boolean=false;
  payement!:Payement;
  closeResult!: string;
  transaction:Transaction[]=[];


  Paiement: any="Paiement";
  success: string="Paiement avec Succés";
  failed: string ="Echec de Paiement";


  constructor(private payementService: PayementService, private modalService: NgbModal){} //,private toast:NgToastService
  ngOnInit(): void {
    this.getPayements();
    this.payement= {

      idPayement :null,
    rib:null,
    beneficiaire:null,
    beneficiaireRib:null,
    montant:null,
    motif:null,
    statut:null,
    codeRaison:null,
    dateOperation:null,
    }

  }
  getPayements(){
    this.payementService.getPayements().subscribe(res=>this.listPayements=res)
  }

  addPayement(t:any) {
    this.payementService.addPayement(t).subscribe(()=> {
      this.getPayements();
      this.form = false;
      //this.toast.success({detail:"Success Message", summary:"Transaction added Successfully", duration:5000})

    }, err=>{
      //this.toast.error({detail:"Error Message", summary:"Transaction Failed", duration:5000})
    })
  }


  editPayement(payement:Payement){
    this.payementService.editPayement(payement).subscribe();
    //this.toast.info({detail:"Success Message", summary:"Payement edited Successfully", duration:5000})

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
    console.log(f.value['rib'],f.value['beneficiaire'],f.value['beneficiaireRib'], f.value['montant'],f.value['motif'], f.value['statut'],f.value['codeRaison'], f.value['dateOperation']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)

  }

}
