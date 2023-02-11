import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/models/credit';
import { CreditService } from 'src/app/services/credit.service';

@Component({
  selector: 'app-consultercredit',
  templateUrl: './consultercredit.component.html',
  styleUrls: ['./consultercredit.component.scss']
})
export class ConsultercreditComponent implements OnInit {
  branches: any = [];
  listCreditsClient :any;
  Credit! :Credit
  id:any
  x = sessionStorage.getItem('type') ;

  constructor(private creditService : CreditService) { }

  ngOnInit(): void {
    this.creditService.getAllCreditsbyClient(sessionStorage.getItem("id")).subscribe((response: any) => {
      this.branches = response;

    });

    this.getAllCreditsbyClient();
    this.Credit={
      idCredit: null,
      creditRef:null,
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

  getAllCreditsbyClient() {
    this.creditService.getAllCreditsbyClient(sessionStorage.getItem("id")).subscribe(res => this.listCreditsClient = res);
    console.log(this.listCreditsClient)

  }

}
