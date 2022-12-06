import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject, Subscription} from "rxjs";
import {TransactionService} from "../../services/transaction.service";
import {Transaction} from "../../models/transaction";
//import {NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-depot',
  templateUrl: './depot.component.html',
  styleUrls: ['./depot.component.scss']
})
export class DepotComponent implements OnInit {


  depott!:Transaction;
  deposit_amount: any;
  monRib: any;

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


  ngOnInit(): void {
    this.depott= {

      idTransaction:null,
      beneficiairerib:null,

      rib:null,
      typeTransaction:null,
      montant:null,
      motif:null,
      statut:null,
      codeRaison:null,
      dateOperation:null

    }
  }

  depot() {
    console.log("deposit_amount " + this.deposit_amount);
    console.log("account amount " + this.monRib);


      this.transactionService.depot(this.monRib,this.deposit_amount).subscribe(res => {

      if(res.includes("deposit amount value =0")){

     //   this.toast.info({detail:"Info", summary:"please enter a value greater than 0", duration:5000});
      }
      if(res.includes("depot avec succés")){

     //   this.toast.success({detail:"Success", summary:"deposit successful", duration:5000});
      }

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
