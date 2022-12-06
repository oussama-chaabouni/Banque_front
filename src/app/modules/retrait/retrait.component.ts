import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject, Subscription} from "rxjs";
import {TransactionService} from "../../services/transaction.service";
import {Transaction} from "../../models/transaction";
import {Simulateuragios} from "../../models/simulateuragios";
//import {NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-depot',
  templateUrl: './retrait.component.html',
  styleUrls: ['./retrait.component.scss']
})
export class RetraitComponent implements OnInit {

  simulateursagios!: Simulateuragios;

  montantdudecouvert!:any;
  dureedudecouvert!:any;
  tauxannueleffectifglobal!:any;
  nombredejoursdanslannée!:any;
  totalagios!:any;


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

  retrait_amount: any;
  monRib: any;

  typevirement:any;


  AGIOS="";
  duréedudecouvert:any;
  montant:any;

  ngOnInit(): void {

    this.simulateursagios= {

      idagios :null,
    montantdudecouvert :null,
    dureedudecouvert :null,
    tauxannueleffectifglobal :null,
    nombredejoursdanslannée :null,
    totalagios :null

    };
  }


  retrait() {
    console.log("mon rib "+this.monRib);
    console.log("retrait amount "+this.retrait_amount);

    if (this.typevirement == 0) {
      this.transactionService.retrait(this.retrait_amount, this.monRib).subscribe(res => {
        if (res.includes("montant retiré =0")) {

          //      this.toast.info({detail:"Info", summary:"please enter a value greater than 0 ", duration:5000});
        }
        if (res.includes("Solde insuffisant")) {

          //      this.toast.warning({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
        }

        if (res.includes("/")) {
          console.log("AGIOS yes" + res.substring(0, res.length - 1));
          this.AGIOS = res.substring(0, res.length - 1);


          //      this.toast.warning({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
        }
        if (res.includes("retrait avec succés")) {

          //      this.toast.success({detail:"Success", summary:"withdrawal successful", duration:5000});
        }
      }, err => {
      });

    }  else {
      this.transactionService.retraitEpargne(this.retrait_amount, this.monRib).subscribe(res => {
      });
    }
  }

  SimulateurAgios() {
            this.transactionService.SimulateurAgios(this.montantdudecouvert,this.dureedudecouvert).subscribe(res=>this.totalagios=res);
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
