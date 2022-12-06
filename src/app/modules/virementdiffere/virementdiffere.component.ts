import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject, Subscription} from "rxjs";
import {TransactionService} from "../../services/transaction.service";
//import {NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-virementdiffere',
  templateUrl: './virementdiffere.component.html',
  styleUrls: ['./virementdiffere.component.scss']
})
export class VirementdiffereComponent implements OnInit {

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

  JobData: any;




  ngOnInit(): void {
    this.JobData= {

      idTransaction: null,
      transferFrom:null,
      transferTo:null,
      montant:null,
      motif:null,
      startTime:null,
    }
  }

  virementDiffere() {
    console.log("JobData " + this.JobData);


      this.transactionService.virementDiffere(this.JobData).subscribe(res => {

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
