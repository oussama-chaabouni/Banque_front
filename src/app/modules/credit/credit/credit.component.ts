import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/models/credit';
import { CreditService } from 'src/app/services/credit.service';


@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  branches: any = [];
  listCredits :any;
  Credit! :Credit 


  constructor(private creditService : CreditService) {  }
  

  ngOnInit(): void {
    this.creditService.getAllCredits().subscribe((response: any) => {
      this.branches = response;
        
      });
    this.getAllCredits();
    this.Credit={
    idCredit: null,
    MontantTotal: null,
    DureeDuCredit: null,
    Interet: null,
    DatePremierPaiement: null,
    DateDernierPaiement: null,
    StatusCredit: null,
    ObjectifCredit: null,
    Archive:null,
    Score:null
    }
  
  }

  getAllCredits() {
    this.creditService.getAllCredits().subscribe(res => this.listCredits = res);
    console.log(this.listCredits)
  
  }

}
