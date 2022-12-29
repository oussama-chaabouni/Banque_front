import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject, Subscription} from "rxjs";
import {transactionObject} from "../../models/transactionObject";
import {FormGroup} from "@angular/forms";
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction.service";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {ICustomWindow, WindowRefService} from "../../services/window-ref.service";
import {OrderServiceService} from "../../services/order-service.service";
//import {NgToastService} from "ng-angular-popup";

declare var Razorpay: any;
@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.component.html',
  styleUrls: ['./paiement.component.scss']
})
export class PaiementComponent implements OnInit {
//paypal
  public payPalConfig ?: IPayPalConfig;
//razorpay
  title = 'demo';
  form: any = {};


  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  //, private toast:NgToastService
  listTransactions: any;
  listAccounts: any;

  transaction!: Transaction;
  TransactionsObject!: transactionObject;
  accountBalance: any;
  closeResult!: string;

  b1: any;
  b2: any;
  fromAccount: any;

  typevirement:any;


  beneficiaire: any;
  beneficiaire_rib: any;
  monRib: any;
  montant: any;
  motif:any;

  image:any;
  imagee:any;
  resmontant:any;




  constructor(private transactionService: TransactionService, private modalService: NgbModal, private cdr: ChangeDetectorRef
              ,private zone: NgZone
              ,private winRef: WindowRefService,
              private orderService:OrderServiceService) {  //, private toast: NgToastService

  }


//razorpay
  paymentId: string;
  error: string;

  options = {
    "key": "kVhoUMfrmz8TMavHDmi7IhQQ",
    "amount": "",
    "name": "Ben Debba Cyrine Kenza",
    "description": "Web Development",
    "image": "https://www.javachinna.com/wp-content/uploads/2020/02/android-chrome-512x512-1.png",
    "order_id":"",
    "prefill": {
      "rib": "",
      "name": "",
      "customerRib": "",
      "motif": "",
    },
    "notes": {
      "address": ""
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  initPay(): void {
    this.paymentId = '';
    this.error = '';
    this.orderService.createOrder(this.form).subscribe(
      data => {
        this.options.key = data.secretId;
        this.options.order_id = data.razorpayOrderId;
        this.options.amount = data.applicationFee; //paise
        this.options.prefill.rib = this.form.rib;
        this.options.prefill.name = this.form.name;
        this.options.prefill.customerRib = this.form.customerRib;
        this.options.prefill.motif = this.form.motif;

        console.log("amount " + this.options.amount);
        console.log("rib " + this.options.prefill.rib);
        console.log("name " + this.options.prefill.name);
        console.log("customerrib " + this.options.prefill.customerRib);
        console.log("motif " + this.options.prefill.motif);


        //ken chnadfa3 akther men 1000 chnadfa3 b @esprit.tn (razor1)
        //ken chnadfa3 a9al men 1000 chnadfa3 b @gmail.com (razor2)
        if(data.pgName ==='razor2') {
          this.options.image="";
          var rzp1 = new Razorpay(this.options);
          rzp1.open();
        }
        var rzp2 = new Razorpay(this.options);
        rzp2.open();



      }
      ,
      err => {
        this.error = err.error.message;
      }
    );///CUSTOMER RIB FEL PAIEMENT TYPE STRING W F TRANSACTION TYPE STRING
    this.transactionService.paiement(this.form.name, this.form.customerRib, this.form.rib, this.form.motif, this.form.amount).subscribe(this.monRib);
  }
  /////

  //paypal
  ngOnInit(): void {

    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'AToM6q06QASc1xrcewh-D8Twrqq0BBiJcpCIBlCX4Rm0xsmcV1Pow5QJmR3_RkhSPIusQrPCWvbFwoiP', // add paypal clientId here
      createOrderOnClient: (data) => <ICreateOrderRequest> {
        intent: 'CAPTURE',
        purchase_units: [{
          amount: {
            currency_code: 'EUR',
            value: '0.01',
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: '0.01'
              }
            }
          },
          items: [{
            name: 'The Swag Coder',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: '0.01',
            },
          }]
        }]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
        size: 'small',
        color: 'blue',
        shape: 'rect'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        actions.order.get();

      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);

      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      }
    };

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

    if (!this.monRib.valid) {
      return alert('Veuillez verifier les Champs');
    }
    this.transactionService.sendMoneyAction({openModal: true, transactionObject: this.monRib.value,});
  }

  Paiement() {
    console.log("beneficiaire " + this.beneficiaire);
    console.log("beneficiaire_ribt " + this.beneficiaire_rib);
    console.log("monRib " + this.monRib);
    console.log("motif " + this.motif);
    console.log("montant" + this.montant);

    this.transactionService.paiement(this.beneficiaire, this.beneficiaire_rib, this.monRib, this.motif, this.montant).subscribe(res => {
      if(res.includes("Montant à payer = 0")){

 //       this.toast.info({detail:"Info", summary:"Veuillez Choisir Un Montant superieur à 0", duration:5000});
      }
      if(res.includes("montant à payer ne peut pas etre superieur à votre solde")){

 //       this.toast.warning({detail:"Warning", summary:"Solde Insuffisant", duration:5000});
      }
      if(res.includes("Payement Effectué Avec Succés")){

 //       this.toast.success({detail:"Success", summary:"Payement Effectué Avec Succés", duration:5000});
      }

    }, err => {
    });
  }


  getcheque() {
    console.log('montant: '+this.montant)
    console.log('ancien nom image: '+this.image)

    //this.imagee= this.image.split('/').pop();


    this.imagee=this.image.slice(12,this.image.length - 4)
    console.log('nouv nom image: '+this.imagee)
    //NA7IT C://fakepath/ w .jpg/.png

    this.transactionService.getcheque(this.montant,this.imagee).subscribe(res=> {

        console.log('resmontant2: '+res)
        this.resmontant=res;


        //      this.toast.warning({detail:"Error", summary:"You Have insufficient Funds!", duration:5000});


    }, err => {
    });
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

