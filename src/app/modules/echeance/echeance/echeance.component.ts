import { Component, OnInit } from '@angular/core';
import { EcheanceService } from 'src/app/services/echeance.service';

@Component({
  selector: 'app-echeance',
  templateUrl: './echeance.component.html',
  styleUrls: ['./echeance.component.scss']
})
export class EcheanceComponent implements OnInit {
  selectedAmount: string;
  selectedAmount1: any;
  selectedPeriod: any;
  selectedInterest: any;

  constructor(private echeanceService : EcheanceService) { }

  ngOnInit(): void {
  }

  sim(){
    this.echeanceService.getSim(this.selectedAmount1, this.selectedPeriod, this.selectedInterest ).subscribe((data)=>{
      this.selectedAmount = data;
    });
  }

}
