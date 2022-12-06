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


  constructor(private transactionService: TransactionService, private modalService: NgbModal, private cdr: ChangeDetectorRef) {
    //, private toast:NgToastService

    const loadingSubscr = this.isLoading$
      .asObservable()
      .subscribe((res) => (this.isLoading = res));
    this.unsubscribe.push(loadingSubscr);

  }

  ScheduledInfoVirementPermanent: any;
  typevirement:any;
  nom =" ";
  transferTo: any;



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
  }

  virementDiffere() {
    console.log("ScheduledInfoVirementPermanent " + this.ScheduledInfoVirementPermanent);

    console.log("xxxx  transferToRib " + this.transferTo);
    if (this.typevirement == 0) {
      this.transactionService.virementPermanent(this.ScheduledInfoVirementPermanent).subscribe(res => {

    //   this.toast.success({detail:"Success", summary:"deposit successful", duration:5000});


      });
    } else {
      this.transactionService.virementPermanentEpargne(this.ScheduledInfoVirementPermanent).subscribe(res => {
      });
    }
  }


  nameOfUserByRibb(transferTo:any) {
    if(transferTo != null) {
      this.transactionService.nameOfUserByRib(this.ScheduledInfoVirementPermanent.transferTo).subscribe(res => {
        if(res != null) {
          this.nom = res;
        }
        else{
          this.nom = "";
        }

        console.log("xxxx " + res)
      });
    }
  }

  nameOfUserByRibbEpargne(transferTo:any) {
    if(transferTo != null) {
      this.transactionService.nameOfUserByRibEpargne(this.ScheduledInfoVirementPermanent.transferTo).subscribe(res => {
        if(res != null) {
          this.nom = res;
        }
        else{
          this.nom = "";
        }

        console.log("xxxx " + res)
      });
    }
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
