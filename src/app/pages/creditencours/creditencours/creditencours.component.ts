import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/models/credit';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-creditencours',
  templateUrl: './creditencours.component.html',
  styleUrls: ['./creditencours.component.scss']
})
export class CreditencoursComponent implements OnInit {

  branches: any = [];
  listCredits :any;
  Credit! :Credit
  id=sessionStorage.getItem("id")
  type=sessionStorage.getItem("type")

  constructor(private creditService : CreditService) { }

  ngOnInit(): void {

    this.creditService.getAllCredits().subscribe((response: any) => {
      this.branches = response;

      });
    this.getAllCredits();
    this.Credit={
      idCredit: null,
      montantTotal: null,
      dureeDuCredit: null,
      interet: null,
      description:null,
      datePremierPaiement: null,
      dateDernierPaiement: null,
      statusCredit: null,
      objectifCredit: null,
      archive:null,
      score:null
    }

  }

  getAllCredits() {
    this.creditService.getAllCredits().subscribe(res => this.listCredits = res);
    console.log(this.listCredits)
  }

  acceptLoan(idL: any, loan: Credit) {
    this.creditService.acceptLoan(idL, loan ).subscribe(() => this.getAllCredits());

  }
  denyLoan(idL: any, loan: Credit) {
    this.creditService.denyLoan(idL, loan ).subscribe(() => this.getAllCredits());


  }
}

