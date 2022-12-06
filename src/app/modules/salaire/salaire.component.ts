import { Component, OnInit } from '@angular/core';
import {Salaire} from "../../models/salaire";
import {SalaireService} from "../../services/salaire.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

@Component({
  selector: 'app-salaire',
  templateUrl: './salaire.component.html',
  styleUrls: ['./salaire.component.scss']
})
export class SalaireComponent implements OnInit {

  term: string;
  listSalaires:any;
  form:boolean=false;
  salaire!:Salaire;
  closeResult!: string;


  constructor(private salaireService: SalaireService, private modalService: NgbModal){ //,private toast:NgToastService

  }


  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.getSalaires();
    this.salaire= {

      idsalaire :null,
      nomemploye:null,
    salaire :null,
    salairenet :null,
    nbheuresup :null,
    prixheuresup :null,
    totaltax :null,
    }
  }

  getSalaires(){
    this.salaireService.getSalaires().subscribe(res=>this.listSalaires=res)
  }
  addSalaire(t:any) {
    this.salaireService.addSalaire(t).subscribe(()=> {
      this.getSalaires();
      this.form = false;
      //this.toast.success({detail:"Success Message", summary:"Salaire added Successfully", duration:5000})

    }, err=>{
      //this.toast.error({detail:"Error Message", summary:"Salaire Failed", duration:5000})
    })
  }

  editSalaire(salaire:Salaire){
    this.salaireService.editSalaire(salaire).subscribe();
    //this.toast.info({detail:"Success Message", summary:"Salaire edited Successfully", duration:5000})

  }

  deleteSalaire(idSalaire:any){
    this.salaireService.deleteSalaire(idSalaire).subscribe(()=>this.getSalaires());
   // this.toast.warning({detail:"Success Message", summary:"Salaire deleted Successfully", duration:5000})

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
    console.log(f.value['rib'],f.value['typeSalaire'], f.value['montant'],f.value['motif'], f.value['statut'],f.value['codeRaison'], f.value['dateOperation']); //pour recuperer le contunu de differents input du form dans la partie console(inspecter)

  }

}
