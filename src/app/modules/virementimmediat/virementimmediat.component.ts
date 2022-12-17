import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject, Subscription} from "rxjs";
import {transactionObject} from "../../models/transactionObject";
import {FormGroup} from "@angular/forms";
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction.service";
//import {NgToastService} from "ng-angular-popup";
@Component({
  selector: 'app-virementimmediat',
  templateUrl: './virementimmediat.component.html',
  styleUrls: ['./virementimmediat.component.scss']
})
export class VirementimmediatComponent implements OnInit {

  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  typecompteacrediter:any;
  typecompteadebiter:any;
  private unsubscribe: Subscription[] = [];

  //, private toast:NgToastService
  listTransactions: any;
  listAccounts: any;

  form = false;
  transaction!: Transaction;
  TransactionsObject!: transactionObject;
  accountBalance: any;
  closeResult!: string;

  b1: any;
  b2: any;
  fromAccount: any;


  nom =" ";
  transferFromRib: any;
  transferToRib: any;
  montant: any;
  motif:any;


  transaction_type = 'Transfer';
  source = 'online';
  status = 'success';
  reason_code = 'Transfer Transaction Successful';
  created_at: any;
  transferForm: FormGroup;
  completeDate: Date;

  constructor(private transactionService: TransactionService, private modalService: NgbModal, private cdr: ChangeDetectorRef) {  //, private toast: NgToastService

    this.completeDate = new Date();
    this.created_at = this.completeDate.toISOString();
    this.created_at = this.created_at.substring(0, this.created_at.length - 1);
  }

  ngOnInit(): void {
    this.getTransactions();
    this.transaction = {

      idTransaction: null,
      rib: null,
      beneficiairerib:null,
      typeTransaction: null,
      montant: null,
      motif: null,
      statut: null,
      codeRaison: null,
      dateOperation: null,
    };
    /*setTimeout(()=>{                           // <<<---using ()=> syntax
      console.log("xxx 1")
      this.nameOfUserByRibb(this.transferToRib);
    }, 1000);
*/

  }

  getTransactions() {
    this.transactionService.getTransactions().subscribe(res => this.listTransactions = res);
  }


  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  cancel() {
    this.form = false;
  }

  submit() {
    console.log('submitted:',);

    if (!this.transferForm.valid) {
      return alert('Veuillez verifier les Champs');
    }
    this.transactionService.sendMoneyAction({openModal: true, transactionObject: this.transferForm.value,});
  }

  nameOfUserByRibb(transferToRib:any) {
    if(transferToRib != null) {
      this.transactionService.nameOfUserByRib(this.transferToRib).subscribe(res => {
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

  nameOfUserByRibbEpargne(transferToRib:any) {
    if(transferToRib != null) {
      this.transactionService.nameOfUserByRibEpargne(this.transferToRib).subscribe(res => {
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


  virementImmediat() {
    console.log("xxx type de vireent +"+this.typecompteacrediter);
    if (this.transferFromRib == null) {
      //       this.toast.error({detail:"Success", summary:" Veuillez Ecrire Votre Rib", duration:5000});

    } else {
      if (this.transferToRib == null) {

//          this.toast.error({detail:"Error", summary:"Veuillez Ecrire Le Rib De Destinataire", duration:5000});

      } else {
        if (this.montant == null) {

          //           this.toast.error({detail:"Success", summary:"Veuillez Ecrire Le Motant à Transferer, duration:5000});
        } else {
          if (this.motif == null) {

            //           this.toast.error({detail:"Success", summary:"Veuillez Ecrire Le Motif", duration:5000});
          }
          console.log("xxxx  transferToRib "+this.transferToRib);
          //nab3ath men compte courant l compte courant
          if(this.typecompteadebiter==3 && this.typecompteacrediter ==0 ){
            this.transactionService.virementImmediat(this.transferFromRib, this.transferToRib, this.montant, this.motif).subscribe((res: string) => {

              if (res.includes("cannot transfer to the same Account")) {

                //     this.toast.warning({detail:"Warning", summary:"Cannot Transfer Into The same Account", duration:5000});
              }
              if (res.includes("transfer amount value =0 , please enter a value greater than 0")) {

                //      this.toast.info({detail:"Info", summary:"Please enter a value greater than 0", duration:5000});
              }
              if (res.includes("impossible de transferer un montant superieur à celui dans votre compte")) {

                //      this.toast.error({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
              }
              if (res.includes("15 000 dinars maximum par virement")) {

                //      this.toast.error({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
              }


            });
            //nab3ath men compte epargne l compte epargne
          } if(this.typecompteadebiter==4 && this.typecompteacrediter ==1 ){
            this.transactionService.virementImmediatEpargne(this.transferFromRib, this.transferToRib, this.montant, this.motif).subscribe((res: string) => {

              if (res.includes("cannot transfer to the same Account")) {

                //     this.toast.warning({detail:"Warning", summary:"Cannot Transfer Into The same Account", duration:5000});
              }
              if (res.includes("transfer amount value =0 , please enter a value greater than 0")) {

                //      this.toast.info({detail:"Info", summary:"Please enter a value greater than 0", duration:5000});
              }
              if (res.includes("impossible de transferer un montant superieur à celui dans votre compte")) {

                //      this.toast.error({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
              }
              if (res.includes("15 000 dinars maximum par virement")) {

                //      this.toast.error({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
              }


            });
          }//compte courant l compte epargne
          if(this.typecompteadebiter==3 && this.typecompteacrediter ==1 ){
            this.transactionService.transferFromCompteCourantToCompteEpargne(this.transferFromRib, this.transferToRib, this.montant, this.motif).subscribe((res: string) => {

              if (res.includes("cannot transfer to the same Account")) {

                //     this.toast.warning({detail:"Warning", summary:"Cannot Transfer Into The same Account", duration:5000});
              }
              if (res.includes("transfer amount value =0 , please enter a value greater than 0")) {

                //      this.toast.info({detail:"Info", summary:"Please enter a value greater than 0", duration:5000});
              }
              if (res.includes("impossible de transferer un montant superieur à celui dans votre compte")) {

                //      this.toast.error({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
              }
              if (res.includes("15 000 dinars maximum par virement")) {

                //      this.toast.error({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
              }


            });
          }//compte epargne l compte courant
          if(this.typecompteadebiter==4 && this.typecompteacrediter ==0 ){
            this.transactionService.transferFromCompteEpargneToCompteCourant(this.transferFromRib, this.transferToRib, this.montant, this.motif).subscribe((res: string) => {

              if (res.includes("cannot transfer to the same Account")) {

                //     this.toast.warning({detail:"Warning", summary:"Cannot Transfer Into The same Account", duration:5000});
              }
              if (res.includes("transfer amount value =0 , please enter a value greater than 0")) {

                //      this.toast.info({detail:"Info", summary:"Please enter a value greater than 0", duration:5000});
              }
              if (res.includes("impossible de transferer un montant superieur à celui dans votre compte")) {

                //      this.toast.error({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
              }
              if (res.includes("15 000 dinars maximum par virement")) {

                //      this.toast.error({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});
              }


            });
          }

          //  this.toast.success({detail:"Success", summary:"Virement effectué avec succés", duration:5000});
        }
      }

    }
  }



    saveSettings()
    {
      this.isLoading$.next(true);
      setTimeout(() => {
        this.isLoading$.next(false);
        this.cdr.detectChanges();
      }, 1500);
    }

    ngOnDestroy()
    {
      this.unsubscribe.forEach((sb) => sb.unsubscribe());
    }


}

