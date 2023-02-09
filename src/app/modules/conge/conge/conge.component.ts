import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { conge } from 'src/app/models/conge';
import { CongeService } from 'src/app/services/conge.service';
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';
@Component({
  selector: 'app-conge',
  templateUrl: './conge.component.html',
  styleUrls: ['./conge.component.scss']
})
export class CongeComponent implements OnInit {
  id=sessionStorage.getItem("id")
  type=sessionStorage.getItem("type")
listConges:any;
form: boolean =false;
conge!:conge;
closeResult! :string;
idEmploye : string;

  constructor(private congeService : CongeService, private modalService : NgbModal) { }

  ngOnInit(): void {
    this.getConges();
    this.conge={

      idConge: null,
      startDateConge: null,
      endDateConge: null,
      soldeConge: null,
      confirmation: null,
      employeConges : null
    }
  }
  getConges() {
    this.congeService.getConges().subscribe(res => this.listConges = res)
  }

  addconge(idEmploye: string, conge : conge){
    this.congeService.addconge(idEmploye,conge).subscribe(() => { this.getConges; this.form=false;})
  }

  deleteConge(idConge : any){
    this.congeService.deleteConge(idConge).subscribe(() => this.getConges())
  }
  acceptConge(conge :conge, idConge: number){
    this.congeService.acceptConge(conge,idConge).subscribe(() => { this.getConges; this.form=false;})

  }
  open(content: any): void {
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
    activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }


    }


