import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Formation} from "../../models/formation";
import {FormationService} from "../../services/formation.service";
import {Formation_details} from "../../models/formation_details";
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

@Component({
  selector: 'app-findallMyformation',
  templateUrl: './findallMyformation.component.html',
  styleUrls: ['./findallMyformation.component.scss']
})
export class FindallMyformationComponent implements OnInit {

  term: string;
  listFormations:any;
  listFormationsDetails:any;
  listMyFormations:any;
  listEmployesParticipants:any;

  id:any;
  idp:any;

  form:boolean=false;
  formation!:Formation;
  formation_details!:Formation_details;
  closeResult!: string;

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


    }

    this.formation_details= {

      Idp :null,
    Etat :null,
    idEmploye :null,
    idF:null,


    }
  }

  @ViewChild('myButton') myButton : ElementRef;

  triggerClick() {
    let el: HTMLElement = this.myButton.nativeElement as HTMLElement;
    setTimeout(()=> el.click(), 5000);
  }

  getFormations(){

    this.formationService.getFormations().subscribe(res=> {
      this.listFormations = res
      console.log(this.listFormations);
    })
  }
  getFormationsDetails() {
    this.formationService.getFormationsDetails().subscribe(res=> {
      this.listFormationsDetails = res
      console.log(this.listFormationsDetails);
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

  ParticiperFormation(){
 //   console.log(Id);
 //   console.log(Idp);

    this.formationService.ParticiperFormation(1,1).subscribe(()=>this.findallMyformation());

  }

  findallMyformation(){
    this.formationService.findallMyformation(1).subscribe(res=> {
      this.listMyFormations = res
      console.log(this.listMyFormations);
    })
  }

  afficherEmployesParticipants(id:any){
    this.formationService.afficherEmployesParticipants(id).subscribe(res=> {
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

  reloadpagefindallMyformation() {
    window.location.replace("/findallMyformation");
  }

}
