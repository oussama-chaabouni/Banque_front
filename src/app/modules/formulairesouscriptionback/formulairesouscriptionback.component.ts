import { Component, OnInit } from '@angular/core';
import {Formulairesouscription} from "../../models/formulairesouscription";
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {NgForm} from "@angular/forms";
import {FormulairesouscriptionService} from "../../services/formulairetsouscription.service";
import {DomSanitizer, SafeUrl} from "@angular/platform-browser";
import {Observable, Subscriber} from "rxjs";
type Tabs =
  | 'kt_table_widget_6_tab_1'
  | 'kt_table_widget_6_tab_2'
  | 'kt_table_widget_6_tab_3';

@Component({
  selector: 'app-formulairesouscriptionback',
  templateUrl: './formulairesouscriptionback.component.html',
  styleUrls: ['./formulairesouscriptionback.component.scss']
})
export class FormulairesouscriptionbackComponent implements OnInit {
  id: any;
  nom: any;
  prenom: any;
  datenaissance: any;
  numero: any;
  email: any;
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

  term: string;
  listFormulairesouscriptionbacks:any;
  form:boolean=false;
  formulairesouscription!:Formulairesouscription;
  closeResult!: string;
  Mme: any="Mme";
  Mlle: any="Mlle";
  M: any="M";
  nonspecifie: any="nonspecifie";


  titredecivilite: ({ titredecivilite: string } | { titredecivilite: string } | { titredecivilite: string } | { titredecivilite: string } )[];
  titredecivilitetuteur: ({ titredecivilitetuteur: string } | { titredecivilitetuteur: string } | { titredecivilitetuteur: string } | { titredecivilitetuteur: string } )[];


  constructor(private sanitizer:DomSanitizer,private formulairesouscriptionService: FormulairesouscriptionService, private modalService: NgbModal){ //,private toast:NgToastService
    this.sanitizer = sanitizer;

    this.imageUrls = [];
    this.lastObjectUrl = "";
  }

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

  activeTab: Tabs = 'kt_table_widget_6_tab_1';

  setTab(tab: Tabs) {
    this.activeTab = tab;
  }

  activeClass(tab: Tabs) {
    return tab === this.activeTab ? 'show active' : '';
  }

  ngOnInit(): void {
    this.getFormulairesouscriptions();
    this.formulairesouscription= {

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
      {titredecivilite:"nonspecifie"},
      {titredecivilite:"Mme"},
      {titredecivilite:"Mlle"},
      {titredecivilite:"M"},

    ]

    this.titredecivilitetuteur=[
      {titredecivilitetuteur:"nonspecifie"},
      {titredecivilitetuteur:"Mme"},
      {titredecivilitetuteur:"Mlle"},
      {titredecivilitetuteur:"M"},

    ]
  }

  getFormulairesouscriptions(){
    console.log(" imageUrls " + this.imageUrls);
    this.formulairesouscriptionService.getFormulairesouscriptionbacks().subscribe(res=>{
      this.listFormulairesouscriptionbacks=res
      this.listFormulairesouscriptionbacks.pieceditentite= 'data:image/jpeg;base64,'
    })
  }


  getImageFromService(){
    this.formulairesouscriptionService.getFormulairesouscriptionbacks()
      .subscribe(res => {
        this.listFormulairesouscriptionbacks=res
        this.justificatifdedomicile = URL.createObjectURL(this.listFormulairesouscriptionbacks);
        this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(this.justificatifdedomicile);
      }, error => {
        console.log(error);
      });
  }
  addFormulairesouscription(t:any) {
    this.formulairesouscriptionService.addFormulairesouscriptionback(t).subscribe(()=> {
      this.getFormulairesouscriptions();
      this.form = false;
      //this.toast.success({detail:"Success Message", summary:"Formulairesouscriptionback added Successfully", duration:5000})

    }, err=>{
      //this.toast.error({detail:"Error Message", summary:"Formulairesouscriptionback Failed", duration:5000})
    })
  }

  editFormulairesouscription(formulairesouscriptionback:Formulairesouscription){
    this.formulairesouscriptionService.editFormulairesouscriptionback(formulairesouscriptionback).subscribe();
    //this.toast.info({detail:"Success Message", summary:"Formulairesouscriptionback edited Successfully", duration:5000})

  }

  deleteFormulairesouscription(id:any){
    this.formulairesouscriptionService.deleteFormulairesouscriptionback(id).subscribe(()=>this.getFormulairesouscriptions());
    // this.toast.warning({detail:"Success Message", summary:"Formulairesouscriptionback deleted Successfully", duration:5000})

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

  getBackground(pieceditentite:any) {
    return this.sanitizer.bypassSecurityTrustStyle(`linear-gradient(rgba(29, 29, 29, 0), rgba(16, 16, 23, 0.5)), url(${this.pieceditentite})`);
  }

  public getSantizeUrl(url : string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
