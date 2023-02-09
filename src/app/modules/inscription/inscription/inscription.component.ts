import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {InscriptionService} from "../../../services/inscription.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {Agent} from "../../../models/agent";
import {Client} from "../../../models/client";




@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  form: FormGroup;
  form2: FormGroup;

  inputType = 'password';
  visible = false;

  //icVisibility = icVisibility;
  //icVisibilityOff = icVisibilityOff;

  progressbar_visible = false;
  progressbar_value = 0;
  agent: Agent = new Agent();
  client: Client = new Client();

  dispoEmail:boolean=false
  dispoEmail1:boolean=false
  dispoUsername:boolean=false
  dispoUsername1:boolean=false
  id=sessionStorage.getItem("id")
  type=sessionStorage.getItem("type")

  DisponibleEmail: String="Disonible";
  DisponibleUsername: String="Disonible";
  visiblePass:boolean=false;
  matchPass:boolean=false;
  PassMatch:String="Les deux mots de passe ne correspondent pas"
  pass:any;
  pass2:any;
  image: File;
  constructor(private router: Router,
              private fb: FormBuilder,
              private fb2: FormBuilder,
              private cd: ChangeDetectorRef,
              private snackbar: MatSnackBar,
              public userService: InscriptionService,
              private _Activatedroute: ActivatedRoute,
              // public dataService: DataService,
              // public campService: CampaignService,
              private http: HttpClient,
              // private toastr: ToastrService,
              // public _loadingBar: SlimLoadingBarService,
              private service: InscriptionService,
              public dialog: MatDialog,
              //  private navigationService: NavigationService
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],

      adresse: ['', Validators.required],
      salaire: ['', Validators.required],
      cin: ['', Validators.required],
      //image: ['', Validators.required]
    });
    this.form2 = this.fb2.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      cin: ['', Validators.required],
      departement : ['', Validators.required],
      //image: ['', Validators.required]
    });

  }
  onFileChange(event:any) {
    this.image = event.target.files[0];
  }
  onFileSelected() {
    const inputNode: any = document.querySelector('#file');

    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();

      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }
  send() {
    if (this.validateEmail(this.form.get('email')!.value)) {
      if (this.form.get('email')!.value !== '' && this.form.get('password')!.value !== '' && this.form.get('nom')!.value !== '') {
        // console.log('come in');
        this.progressbar_visible = true;
        //this._loadingBar.start();

        const data = {
          company_name: this.form.get('name')!.value,
          user: {
            email: this.form.get('email')!.value,
            password: this.form.get('password')!.value
          }
        }
        //this.dataService.createAdvertiserAccount(data)

        //this.router.navigate(['/panel/user/setting']);
        // this.snackbar.open('Lucky you! Looks like you didn\'t need a password or email address! For a real application we provide validators to prevent this. ;)', 'Got It!', {
        //   duration: 10000
        // });
      } else
        this.snackbar.open('Please fill out all fields', 'Got It!', {
          duration: 10000
        });
    } else {
      this.snackbar.open('Please check email', 'Got It!', {
        duration: 10000
      });
    }
  }

  validateEmail(email:any) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(email).toLowerCase())) {
      return (true)
    }
    return false;
  }

  // switchViewer(type) {
  //
  //   if (type !== '' && type !== 'influencersignup')
  //     this.router.navigate([type, 'brand']);
  //   else
  //     this.router.navigate([type]);
  // }

  toggleVisibility() {
    if (this.visible) {
      this.inputType = 'password';
      this.visible = false;
      this.cd.markForCheck();
    } else {
      this.inputType = 'text';
      this.visible = true;
      this.cd.markForCheck();
    }
  }
  headers = new HttpHeaders().set('Content-Type', 'multipart/form-data');

  signup() {
    const uploadData = new FormData();
   uploadData.append('image', this.image, this.image.name);
    console.log(uploadData)
    this.service.register(this.client, this.image).subscribe(data => {
      if (data != null) {
        this.router.navigate(["/offres"]);
      }
    })
  }

  signup2() {
    this.service.register2(this.client).subscribe(data => {
      if (data != null) {
        this.router.navigate(["/connection"]);
      }
    })
  }
  signup3() {
    this.service.register3(this.agent).subscribe(data => {
      if (data != null) {
        this.router.navigate(["/connection"]);
      }
    })
  }
  redirectConnection(){
    this.router.navigate(["/connection"]);
  }

  CheckEmail() {
    this.service.verifyEmail(this.client.email).subscribe(data => {
      if (data == 1) {
        this.DisponibleEmail = "Email existe déjà"
        this.dispoEmail = true
        this.dispoEmail1 = false;
      } else {
        this.DisponibleEmail = "Disponible"
        this.dispoEmail = true
        this.dispoEmail1 = true;
      }
    })
  }

  CheckUsername() {

    console.log(this.client);

    this.service.verifyUsername(this.client.nom).subscribe(data => {
      console.log(data);
      console.log(this.client.nom);
      if (data == 1) {
        this.DisponibleUsername = "Username already exist"
        this.dispoUsername = true
        this.dispoUsername1 = false;
      } else {
        this.DisponibleUsername = "Disponible"
        this.dispoUsername = true
        this.dispoUsername1 = true;
      }
    })

  }

  checkPass() {
    if (this.client.password == this.pass) {
      this.visiblePass = false
      this.matchPass = false;
    } else {
      this.visiblePass = true;
      this.matchPass = true;
    }
  }
}
