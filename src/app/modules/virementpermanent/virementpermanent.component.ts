import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject, Subscription} from "rxjs";
import {TransactionService} from "../../services/transaction.service";
import {Transaction} from "../../models/transaction";
//import {NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-virementpermanent',
  templateUrl: './virementpermanent.component.html',
  styleUrls: ['./virementpermanent.component.scss']
})
export class VirementpermanentComponent implements OnInit {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];


  periode: ({ periode: string } | { periode: string } | { periode: string })[];

  mensuel: string="Mensuel (Chaque Mois)";
  trimestriel: string="Trimestriel (Chaque 3 Mois)";
  semestriel: string="Semestriel (Chaque 6 Mois)";


  constructor(private transactionService: TransactionService, private modalService: NgbModal, private cdr: ChangeDetectorRef) {
    //, private toast:NgToastService

    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);

  }

  ScheduledInfoVirementPermanent: any;




  ngOnInit(): void {
    this.ScheduledInfoVirementPermanent= {

      duree:null,
      idTransaction:null,
      montant:null,
      motif:null,
      periode:null,
      startTime:null,
      transferFrom:null,
      transferTo:null,

    }

    this.periode=[
      {periode:"Mensuel (Chaque Mois)", },
      {periode:"Trimestriel (Chaque 3 Mois)"},
      {periode:"Semestriel (Chaque 6 Mois)"}

    ]
  }

  virementDiffere() {
    console.log("ScheduledInfoVirementPermanent " + this.ScheduledInfoVirementPermanent);


      this.transactionService.virementPermanent(this.ScheduledInfoVirementPermanent).subscribe(res => {

    //   this.toast.success({detail:"Success", summary:"deposit successful", duration:5000});


    }, error => {
    });
  }


  saveSettings() {
    this.isLoading$.next(true);
    setTimeout(() => {
      this.isLoading$.next(false);
      this.cdr.detectChanges();
    }, 1500);
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
