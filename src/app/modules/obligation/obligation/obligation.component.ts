import { Component, OnInit } from '@angular/core';
import {ObligationService} from "../../../services/obligation.service";
import { Obligation } from '../../../models/obligation';
import { CompteTitre } from '../../../models/compteTitre';

@Component({
  selector: 'app-obligation',
  templateUrl: './obligation.component.html',
  styleUrls: ['./obligation.component.scss']
})
export class ObligationComponent implements OnInit {
  prixOblig: any;
  maturite: any;
  coupon: any;
  interet: any;
  freqPaiement: any;
  freqCoupon: any;
  selectedAmount:any;
  branches: any = [];
  listTitres: any;
  listObligations: any;
  Obligation!: Obligation;
  CompteTitre!: CompteTitre;
  constructor(private obligationService: ObligationService) { }

  ngOnInit(): void {
    this.obligationService.getAllObligations().subscribe((response: any) => {
      this.obligationService.retrieveCompteTitre(1).subscribe((response2: any) => {
        this.branches = response;
        this.listObligations = response;
      });
    });

    this.Obligation = {
      idObligation: null,
      libelle: null,
      coupon: null,
      maturite: null,
      tauxActu: null,
      valeurNominal: null,
      tauxRendement:null,
      status: null,
      echanceOblig:null
    }


  }
  getAllObligations() {
    this.obligationService.getAllObligations().subscribe((res: any) => {

      this.listObligations = res;
    })
  };

  buyObligation(idL: any,id:any) {
    this.obligationService.buyObligation(idL,id).subscribe(() => this.getAllObligations());

  }
  retrieveCompteTitre(idL: any) {
    this.obligationService.retrieveCompteTitre(idL).subscribe(res => this.listTitres = res);
    this.obligationService.getAllObligations().subscribe(res => this.listObligations = res);
  }
  sim(){
    this.obligationService.simulationReturn(this.prixOblig, this.maturite, this.coupon, this.interet, this.freqPaiement, this.freqCoupon  ).subscribe((data)=>{
      this.selectedAmount = data;
    });
  }
  formatLabel(value: number) {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
