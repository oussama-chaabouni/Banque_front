import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/models/credit';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-creditrefuse',
  templateUrl: './creditrefuse.component.html',
  styleUrls: ['./creditrefuse.component.scss']
})
export class CreditrefuseComponent implements OnInit {

  branches: any = [];
  listCredits :any;
  Credit! :Credit 

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
      datePremierPaiement: null,
      dateDernierPaiement: null,
      description:null,
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

  }


