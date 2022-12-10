import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AssuranceService } from 'src/app/services/assurance.service';
import { BehaviorSubject, Subscription } from 'rxjs';
import { assurance } from 'src/app/models/assurance';
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';
@Component({
  selector: 'app-assurance',
  templateUrl: './assurance.component.html',
  styleUrls: ['./assurance.component.scss']
})
export class AssuranceComponent implements OnInit {

  listAssurances:any;
  form: boolean =false;
  assurance!:assurance;
  closeResult! :string;
  id:any;
  resSugg:any;

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];
  constructor(private assuranceService : AssuranceService, private modalService : NgbModal, private cdr:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.getAssurances();
this.assurance={
    idAssurance: null,
    description: null,
    nom:null,
    typeAssurance:null,
    typeCompte:null
  }
  }


  getAssurances() {
    this.assuranceService.getAssurances().subscribe(res => this.listAssurances = res)
  }
 addAssurance(assurance: assurance){
this.assuranceService.addassurance(assurance).subscribe(() => { this.getAssurances; this.form=false;})
 }
 
 suggest(id : any){
  
  this.assuranceService.suggest(id).subscribe(res => {console.log(res); this.resSugg= res;});
}

  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }
  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }



}
