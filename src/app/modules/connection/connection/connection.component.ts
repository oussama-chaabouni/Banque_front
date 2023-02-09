import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Agent} from "../../../models/agent";
import {Client} from "../../../models/client";
import {Router} from "@angular/router";
import {InscriptionService} from "../../../services/inscription.service";
import {JwtResponse} from "../../../models/jwt-response";

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent implements OnInit {
  form: FormGroup;
  inputType = 'password';
  visible = false;
  agent: Agent = new Agent();
  client: Client = new Client();
  visiblePass:boolean=false;
  matchPass:boolean=false;
  PassMatch:String="2 password does not match"
  pass:any;
  image: File;
  email: any;
  password:any;
  id=sessionStorage.getItem("id")
  type=sessionStorage.getItem("type")
  response: JwtResponse =new JwtResponse();
  constructor(private router: Router,
              private fb: FormBuilder,
              private service: InscriptionService) { }
  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      //image: ['', Validators.required]
    });

  }

  connection(){
    this.service.login(this.email, this.password).subscribe(data => {
      if (data != null) {
        this.router.navigate(["/offres"]);
      }
    })
  }


  login(){
    this.email=this.email

    this.service.login(this.email,this.password).subscribe(data=>{
      console.log(data.client);

      if(data != null) {
        console.log(data);
        if (data == 1) {
          console.log("user disabled");

        } else if (data == 2) {
          console.log("The email or password that you entered is not valid. Please try again or create a new account using sign up'");

        } else {

          this.response = data;

          if (this.response.agent != null) {
           // this.agent = this.response.agent;
            if(this.agent.status == 0){
              console.log("cava");

            }
            else {
              sessionStorage.setItem("token", this.agent.token);
              sessionStorage.setItem("id", this.agent.idEmploye);
              sessionStorage.setItem("username", this.agent.email);
              sessionStorage.setItem("email", this.agent.email);
              sessionStorage.setItem("type", this.agent.role);
              if (this.type=='RH'){
                this.router.navigate(["/formation"]);
              }
              else if (this.type=='FINANCIER'){
                this.router.navigate(["/creditencours"]);
              }
            }
          } else if (this.response.client != null) {
            this.client = this.response.client;
            if(this.client.status == 0){

            }
            else {
              sessionStorage.setItem("id", this.client.idClient);
              sessionStorage.setItem("token", this.client.token);
              sessionStorage.setItem("username", this.client.nom);
              sessionStorage.setItem("email", this.client.email);
              sessionStorage.setItem("type", "client");
              this.router.navigate(["/action"]);
            }
          }

        }
      }
      else{

      }
    })};


  login2(){
    this.email=this.email

    this.service.login(this.email,this.password).subscribe(data=>{
      console.log(data.client);

      if(data != null) {
        console.log(data);
        if (data == 1) {
          console.log("user disabled");

        } else if (data == 2) {
          console.log("The email or password that you entered is not valid. Please try again or create a new account using sign up'");

        } else {

          this.response = data;

          if (this.response.agent != null) {
            // this.agent = this.response.agent;
            if(this.agent.status == 0){
              console.log("cava");

            }
            else {
              sessionStorage.setItem("token", this.agent.token);
              sessionStorage.setItem("id", this.agent.idEmploye);
              sessionStorage.setItem("username", this.agent.email);
              sessionStorage.setItem("email", this.agent.email);
              sessionStorage.setItem("type", this.agent.role);
              if (this.type=='RH'){
                this.router.navigate(["/formation"]);
              }
              else if (this.type=='FINANCIER'){
                this.router.navigate(["/creditencours"]);
              }
            }
          } else if (this.response.client != null) {
            this.client = this.response.client;
            if(this.client.status == 0){

            }
            else {
              sessionStorage.setItem("id", this.client.idClient);
              sessionStorage.setItem("token", this.client.token);
              sessionStorage.setItem("username", this.client.nom);
              sessionStorage.setItem("email", this.client.email);
              sessionStorage.setItem("type", "client");
              this.router.navigate(["/action"]);
            }
          }

        }
      }
      else{

      }
    })};

}
