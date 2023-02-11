import { Component, OnInit } from '@angular/core';
import {Comptecourant} from "../../models/comptecourant";
import {ComptecourantService} from "../../services/comptecourant.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

@Component({
  selector: 'app-comptecourant',
  templateUrl: './comptecourant.component.html',
  styleUrls: ['./comptecourant.component.scss']
})
export class ComptecourantComponent implements OnInit {

  term: string;
  listComptecourants:any;
  form:boolean=false;
  comptecourant!:Comptecourant;
  closeResult!: string;

  constructor(private comptecourantService: ComptecourantService, private modalService: NgbModal){ //,private toast:NgToastService

  }


  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.getComptecourants();
    this.comptecourant= {

      idCompteCourant:null,

      rib:null,
    IBANC:null,
    Solde:null,
    Plafond:null,
    Nom:null,
    }
  }

  getComptecourants(){
    this.comptecourantService.getComptecourants().subscribe(res=>this.listComptecourants=res)
  }
  addComptecourant(t:any) {
    this.comptecourantService.addComptecourant(t).subscribe(()=> {
      this.getComptecourants();
      this.form = false;
      //this.toast.success({detail:"Success Message", summary:"Comptecourant added Successfully", duration:5000})

    }, err=>{
      //this.toast.error({detail:"Error Message", summary:"Comptecourant Failed", duration:5000})
    })
  }

  editComptecourant(comptecourant:Comptecourant){
    this.comptecourantService.editComptecourant(comptecourant).subscribe();
    //this.toast.info({detail:"Success Message", summary:"Comptecourant edited Successfully", duration:5000})

  }

  deleteComptecourant(idComptecourant:any){
    this.comptecourantService.deleteComptecourant(idComptecourant).subscribe(()=>this.getComptecourants());
    // this.toast.warning({detail:"Success Message", summary:"Comptecourant deleted Successfully", duration:5000})

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
