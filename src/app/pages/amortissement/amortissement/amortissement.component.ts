import { Component, OnInit } from '@angular/core';
import { Credit } from 'src/app/models/credit';
import { CreditService } from 'src/app/services/credit.service';
import { EcheanceService } from 'src/app/services/echeance.service';

class Slice2 {
  idL: any;
  loanRef: any;
  stateL: any;
}
@Component({
  selector: 'app-amortissement',
  templateUrl: './amortissement.component.html',
  styleUrls: ['./amortissement.component.scss']
})
export class AmortissementComponent implements OnInit {
  config: any;
  p=1;
  constructor(private echeanceService : EcheanceService,private creditService:CreditService) {
    this.config = {
      itemsPerPage: 3,
      currentPage: 1,
      totalItems: 40

    };
   }

  branches: any = [];
  listEcheance: any;
  listCredits :any;
  listSlices: any;
  Credit! :Credit
  form = false;
  echeanceLoan: any;
  selectedOption: any;
  Slice2!: Slice2;
  ngOnInit(): void {this.creditService.getAllCredits().subscribe((response: any) => {
    this.branches = response;

    });
  this.getAllCredits();
  this.Credit={
    idCredit: null,
    montantTotal: null,
    dureeDuCredit: null,
    description:null,
    interet: null,
    datePremierPaiement: null,
    dateDernierPaiement: null,
    statusCredit: null,
    objectifCredit: null,
    archive:null,
    score:null,
    creditRef:null,
  }
}


  getAllCredits() {
    this.creditService.getAllCredits().subscribe(res => this.listCredits = res);
    console.log(this.listCredits)

  }
  getAllDetailLoans() {
    this.echeanceService.getAllDetailLoans().subscribe(res => this.listSlices = res);
  }


  addslice(idslice: any, slice: any) {
    this.echeanceService.addDetailLoan(idslice, slice).subscribe(() => {
      this.getAllDetailLoans();
      this.form = false;
    });
    console.log(idslice);
  }

  pageChanged(event:any){
    this.config.currentPage = event;
  }


}
