import { Component, OnInit } from '@angular/core';
import {ObligationService} from "../../../services/obligation.service";
import {ActionService} from "../../../services/action.service";

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
  constructor(private obligationService: ObligationService) { }

  ngOnInit(): void {
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
