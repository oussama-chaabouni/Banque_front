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
  selector: 'app-formationfront',
  templateUrl: './formationfront.component.html',
  styleUrls: ['./formationfront.component.scss']
})
export class FormationfrontComponent implements OnInit {
  idconnecte=sessionStorage.getItem("id")
  type=sessionStorage.getItem("type")
  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;

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


  deleteFormation(Id:any){
    this.formationService.deleteFormation(Id).subscribe(()=>this.getFormations());
   // this.toast.warning({detail:"Success Message", summary:"Transaction deleted Successfully", duration:5000})

  }

  //PARAMETRE, KHATER 7ACHTI B ID FORMATION KI NJI NA3MEL PARTICIPER (KIL DELETE KI NJI NFASAKH NEST7A9 ID FORMATION)MANA3MALCH THIS.ID
  ParticiperFormation(Id:any){
    this.formationService.ParticiperFormation(Id,this.idconnecte).subscribe((res: string) => {
      //ki na3mel participer yaffichili table formationdetails
      this.findallMyformation();
      console.log(this.listMyFormations);
    });
  }


  findallMyformation(){ //this.idemploye

    window.location.replace("/findallmyformation");

    this.formationService.findallMyformation(this.idconnecte).subscribe(res=> {
      this.listMyFormations = res

    })
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
