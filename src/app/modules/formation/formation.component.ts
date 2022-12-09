import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Formation} from "../../models/formation";
import {FormationService} from "../../services/formation.service";
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  term: string;
  listFormations:any;
  listMyFormations:any;
  listEmployesParticipants:any;
  form:boolean=false;
  formation!:Formation;
  closeResult!: string;

  Id:any;
  Departement :any;
  Nom_Formation :any;
  Duree:any;
  Description:any;
  Date_debut:any;
  Commence_Bientot:any="Commence_Bientot";
  En_cours: any="En_cours";
  Termine: any="Terminé";

  etatformation: ({ etatformation: string } | { etatformation: string } | { etatformation: string })[];


  constructor(private formationService: FormationService, private modalService: NgbModal){ //,private toast:NgToastService

  }


  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.getFormations();
    this.formation= {

    Id :null,
    Departement :null,
    Nom_Formation :null,
    Duree:null,
    Description:null,
    Date_debut:null,
      etatformation:null,


    }

    this.etatformation=[
      {etatformation:"Commence_Bientot"},
      {etatformation:"En_cours"},
      {etatformation:"Terminé"}

    ]
  }

  getFormations(){

    this.formationService.getFormations().subscribe(res=> {
      this.listFormations = res
      console.log(this.listFormations);
    })
  }
  addFormation(t:any) {
    this.formationService.addFormation(t).subscribe(()=> {
      this.getFormations();
      this.form = false;
      //this.toast.success({detail:"Success Message", summary:"Transaction added Successfully", duration:5000})

    }, err=>{
      //this.toast.error({detail:"Error Message", summary:"Transaction Failed", duration:5000})
    })
  }

  editformation(formation:Formation){
    this.formationService.editFormation(formation).subscribe();
    //this.toast.info({detail:"Success Message", summary:"Transaction edited Successfully", duration:5000})

  }

  deleteFormation(Id:any){
    this.formationService.deleteFormation(Id).subscribe(()=>this.getFormations());
   // this.toast.warning({detail:"Success Message", summary:"Transaction deleted Successfully", duration:5000})

  }



  afficherEmployesParticipants(Id:any){
    //idformation
    this.formationService.afficherEmployesParticipants(Id).subscribe(res=> {
      this.listEmployesParticipants = res
      console.log(this.listEmployesParticipants);
    })

  }

  desincrireFormation(idp:any,id:any){
    this.formationService.desincrireFormation(idp,id).subscribe(()=>this.getFormations());

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
    console.log(f.value['Departement'],f.value['Nom_Formation'], f.value['Duree'],f.value['Description'], f.value['Date_debut']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)

  }

}
