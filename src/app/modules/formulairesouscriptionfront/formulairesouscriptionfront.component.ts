import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {BehaviorSubject, Observable, Subscriber, Subscription} from "rxjs";
import {transactionObject} from "../../models/transactionObject";
import {FormGroup} from "@angular/forms";
import {Transaction} from "../../models/transaction";
import {TransactionService} from "../../services/transaction.service";
import {ICreateOrderRequest, IPayPalConfig} from "ngx-paypal";
import {ICustomWindow, WindowRefService} from "../../services/window-ref.service";
import {OrderServiceService} from "../../services/order-service.service";
import {FormulairesouscriptionService} from "../../services/formulairetsouscription.service";
import {Formulairesouscription} from "../../models/formulairesouscription";
import {saveAs} from "file-saver";
//import {NgToastService} from "ng-angular-popup";
import {DomSanitizer, SafeUrl} from '@angular/platform-browser';


declare var Razorpay: any;
@Component({
  selector: 'app-formulairesouscriptionfront',
  templateUrl: './formulairesouscriptionfront.component.html',
  styleUrls: ['./formulairesouscriptionfront.component.scss']
})
export class FormulairesouscriptionfrontComponent implements OnInit {
  id: any;
  titredecivilite: ({ titredecivilite: string } | { titredecivilite: string } | { titredecivilite: string } )[];
  nom: any;
  prenom: any;
  datenaissance: any;
  numero: any;
  email: any;
  titredecivilitetuteur:any="nonspecifie";
  nomtuteur: any="---";
  prenomtuteur: any="---";
  datenaissancetuteur: any="---";
  numerotuteur: any="---";
  emailtuteur: any="---";
  pieceditentite: any="---";
  justificatifdedomicile: any="---";
  depotinitial: any="---";

  pieceditentitee: any;
  justificatifdedomicilee: any;

  imageUrl:any;

  //paypal
  public payPalConfig ?: IPayPalConfig;
//razorpay
  title = 'demo';
  form: any = {};

  term: string;
  formulairesouscriptionfront!:Formulairesouscription;
  closeResult!: string;
  Mme: any="Mme";
  Mlle: any="Mlle";
  M: any="M";




  isLoading$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoading: boolean;
  private unsubscribe: Subscription[] = [];

  //, private toast:NgToastService



  monRib: any;
  montant: any;
  motif:any;

  image:any;

  //TOBASE64
base64code!:any

  public imageUrls: SafeUrl[];
  private lastObjectUrl: string;


  readFile(file: File, subscriber:Subscriber<any>){
    const filereader = new FileReader();
    filereader.readAsDataURL(file)

    filereader.onload = () => {
      subscriber.next(filereader.result);
      subscriber.complete()
    }

    filereader.onerror = () => {
      subscriber.error()
      subscriber.complete()
    }
  }

  convertToBase64(file: File){
  const observable = new Observable((subscriber:Subscriber<any>) => {
this.readFile(file,subscriber)
    })

    observable.subscribe((d)=>{
      console.log(d);
      this.pieceditentite = d
      this.base64code = d
    })
  }

  convertToBase64justificatifdedomicile(file: File){
    const observable = new Observable((subscriber:Subscriber<any>) => {
      this.readFile(file,subscriber)
    })

    observable.subscribe((d)=>{
      console.log(d);
      this.justificatifdedomicile = d
      this.base64code = d
    })
  }

  onChange= ($event:Event)=>{
    const target = $event.target as HTMLInputElement;
    const file:File=(target.files as FileList)[0];
    console.log(file);

    this.convertToBase64(file)

  }
  onChangejustificatifdedomicile= ($event:Event)=>{
    const target = $event.target as HTMLInputElement;
    const file:File=(target.files as FileList)[0];
    console.log(file);

    this.convertToBase64justificatifdedomicile(file)
  }
  /////


  constructor(private sanitizer:DomSanitizer,private formulairesouscriptionService: FormulairesouscriptionService, private modalService: NgbModal, private cdr: ChangeDetectorRef
              ,private zone: NgZone
              ,private winRef: WindowRefService,
              private orderService:OrderServiceService) {  //, private toast: NgToastService

    this.sanitizer = sanitizer;

    this.imageUrls = [];
    this.lastObjectUrl = "";

  }


//razorpay
  paymentId: string;
  error: string;

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
            value: this.montant,
            breakdown: {
              item_total: {
                currency_code: 'EUR',
                value: this.montant
              }
            }
          },
          items: [{
            name: 'The Swag Coder',
            quantity: '1',
            category: 'DIGITAL_GOODS',
            unit_amount: {
              currency_code: 'EUR',
              value: this.montant,
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


      this.formulairesouscriptionfront= {

        id:null,
        titredecivilite:null,
        nom:null,
        prenom:null,
        datenaissance:null,
        numero:null,
        email:null,
        titredecivilitetuteur:null,
        nomtuteur:null,
        prenomtuteur:null,
        datenaissancetuteur:null,
        numerotuteur:null,
        emailtuteur:null,
        pieceditentite:null,
        justificatifdedomicile:null,
        depotinitial:null,
      }

      this.titredecivilite=[
        {titredecivilite:"Mme"},
        {titredecivilite:"Mlle"},
        {titredecivilite:"M"},

      ]



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


  Souscrire() {

    console.log("ancien pieceditentite " + this.pieceditentite);
    console.log("ancien justificatifdedomicile " + this.justificatifdedomicile);

    this.pieceditentitee=this.pieceditentite.slice(12)
    console.log('nouv nom pieceditentite: '+this.pieceditentitee)
    //NA7IT C://fakepath/ w .jpg/.png

    this.justificatifdedomicilee=this.justificatifdedomicile.slice(12)
    console.log('nouv nom justificatifdedomicile: '+this.justificatifdedomicilee)
    //NA7IT C://fakepath/ w .jpg/.png
//MAST7A9ITECH N9OSHOM KHATER NCODI L BASE64 MEHC BECH YJINI FAKEPATH


    this.formulairesouscriptionService.formulairesouscription(this.titredecivilite, this.nom,this.prenom,this.datenaissance,this.numero, this.email,this.titredecivilitetuteur, this.nomtuteur,this.prenomtuteur, this.datenaissancetuteur,this.numerotuteur, this.emailtuteur,this.pieceditentite,this.justificatifdedomicile, this.depotinitial).subscribe(res => {
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



  public handlePaste( event: ClipboardEvent ) : void {

    this.justificatifdedomicilee = this.getPastedImage( event );

    if ( ! this.justificatifdedomicilee ) {

      return;

    }

    // When we create Object URLs, the browser will keep them in memory until the
    // document is unloaded or until the URL is explicitly released. Since we are
    // going to create a new URL every time the user pastes an image into the app (in
    // this particular demo), we need to be sure to release the previous Object URL
    // before we create the new one.
    // --
    // NOTE: One the Image is rendered in the DOM, releasing the Object URL will not
    // affect the rendering.
    if ( this.lastObjectUrl ) {

      URL.revokeObjectURL( this.lastObjectUrl );

    }

    // At this point, the "pastedImage" is a File object, which is a specialized type
    // of "Blob". We can now generate a "blob:" URL using the given File.
    this.lastObjectUrl = URL.createObjectURL( this.justificatifdedomicilee );

    // By default, Angular WILL NOT TRUST this "blob:" style URLs. However, since we
    // know these are going to be expected, we can use the DOM Sanitizer to bypass
    // the security checks on these images.
    // --
    // NOTE: The sanitizer doesn't return Strings - it returns SafeUrls.
    this.imageUrls.unshift(
      this.sanitizer.bypassSecurityTrustUrl( this.lastObjectUrl )
    );
    console.log(" imageUrls " + this.imageUrls);

  }

  // ---
  // PRIVATE METHODS.
  // ---

  // I return the first Image File from the given paste event (or null).
  private getPastedImage( event: ClipboardEvent ) : File | null {

    // NOTE: I am not very familiar with the Paste Event. As such, I am probably
    // being more cautious here than I need to be. However, in an abundance of
    // caution, I am checking each part of the targeted object path.
    if (
      event.clipboardData &&
      event.clipboardData.files &&
      event.clipboardData.files.length &&
      this.isImageFile( event.clipboardData.files[ 0 ] )
    ) {

      return( event.clipboardData.files[ 0 ] );

    }

    return( null );

  }


  // I determine if the given File is an Image (according do its Mime-Type).
  private isImageFile( file: File ) : boolean {

    return( file.type.search( /^image\//i ) === 0 );

  }






}

