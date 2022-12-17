import {ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction.service";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {Formation} from "../../models/formation";
import {FormationService} from "../../services/formation.service";
import {Formation_details} from "../../models/formation_details";
import {BehaviorSubject} from "rxjs";
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

@Component({
  selector: 'app-findallmyformation',
  templateUrl: './findallmyformation.component.html',
  styleUrls: ['./findallmyformation.component.scss']
})
export class FindallmyformationComponent implements OnInit {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;

  term: string;
  listFormationsDetails:any;
  listMyFormations:any;

  id:any;
  idp:any;


  form:boolean=false;
  formation!:Formation;
  formation_details!:Formation_details;
  closeResult!: string;


  Id :any;
  Departement :any;
  Nom_Formation :any;
  Duree:any;
  Description:any;
  Date_debut:any;
  etatformation:any;


  constructor(private formationService: FormationService, private cdr: ChangeDetectorRef, private modalService: NgbModal){ //,private toast:NgToastService

  }

  saveSettings()
  {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {    //NGONINIT MA3NETHA LKHEDMA LI BECH TETKHDEM PAR DEFAUT
    this.findallMyformation();
    this.formation= {

      Id :null,
      Departement :null,
      Nom_Formation :null,
      Duree:null,
      Description:null,
      Date_debut:null,
      etatformation:null,


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


  getFormationsDetails() {
    this.formationService.getFormationsDetails().subscribe(res=> {
      this.listFormationsDetails = res
      console.log(this.listFormationsDetails);
    })
  }


  findallMyformation(){ //this.idemploye


    this.formationService.findallMyformation(2).subscribe(res=> {
      this.listMyFormations = res

    })
  }

  desincrireFormation(id:any){
    this.formationService.desincrireFormation(2,id).subscribe(()=>this.findallMyformation());

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
