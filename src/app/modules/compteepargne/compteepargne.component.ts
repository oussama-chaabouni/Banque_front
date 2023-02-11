import { Component, OnInit } from '@angular/core';
import {Compteepargne} from "../../models/compteepargne";
import {CompteepargneService} from "../../services/compteepargne.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

@Component({
  selector: 'app-compteepargne',
  templateUrl: './compteepargne.component.html',
  styleUrls: ['./compteepargne.component.scss']
})
export class CompteepargneComponent implements OnInit {

  term: string;
  listCompteepargnes:any;
  form:boolean=false;
  compteepargne!:Compteepargne;
  closeResult!: string;
  Livret_A: any="Livret_A";
  LDDS: any="LDDS";
  LEP: any="LEP";
  Livret_JEUNE: any="Livret_JEUNE";
  Compte_Epargne: any="Compte_Epargne";

  epargne_type: ({ epargne_type: string } | { epargne_type: string } | { epargne_type: string } | { epargne_type: string })[];

  constructor(private compteepargneService: CompteepargneService, private modalService: NgbModal){ //,private toast:NgToastService

  }


  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.getCompteepargnes();
    this.compteepargne= {

      idCompteEpargne:null,

      rib:null,
      IBANE:null,
      plafond:null,
      Solde:null,
      Interet:null,
      TypeEpargne:null,
      Nom:null,
    }
    this.epargne_type=[
      {epargne_type:"Livret_A"},
      {epargne_type:"LDDS"},
      {epargne_type:"LEP"},
      {epargne_type:"Livret_JEUNE"},
      {epargne_type:"Compte_Epargne"},

    ]
  }

  getCompteepargnes(){
    this.compteepargneService.getCompteepargnes().subscribe(res=>this.listCompteepargnes=res)
  }
  addCompteepargne(t:any) {
    this.compteepargneService.addCompteepargne(t).subscribe(()=> {
      this.getCompteepargnes();
      this.form = false;
      //this.toast.success({detail:"Success Message", summary:"Compteepargne added Successfully", duration:5000})

    }, err=>{
      //this.toast.error({detail:"Error Message", summary:"Compteepargne Failed", duration:5000})
    })
  }

  editCompteepargne(compteepargne:Compteepargne){
    this.compteepargneService.editCompteepargne(compteepargne).subscribe();
    //this.toast.info({detail:"Success Message", summary:"Compteepargne edited Successfully", duration:5000})

  }

  deleteCompteepargne(idCompteepargne:any){
    this.compteepargneService.deleteCompteepargne(idCompteepargne).subscribe(()=>this.getCompteepargnes());
    // this.toast.warning({detail:"Success Message", summary:"Compteepargne deleted Successfully", duration:5000})

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


}
