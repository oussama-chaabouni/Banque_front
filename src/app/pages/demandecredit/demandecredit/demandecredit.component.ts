import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Credit } from 'src/app/models/credit';
import { CreditService } from 'src/app/services/credit.service';




@Component({
  selector: 'app-demandecredit',
  templateUrl: './demandecredit.component.html',
  styleUrls: ['./demandecredit.component.scss']
})
export class DemandecreditComponent implements OnInit {

  closeResult!:string;
  listCredits :any;
  selectedAmount: any;
  branches: any = [];
  credit! :Credit 
  x = sessionStorage.getItem('type') ;
  p= 1;
  credit1:Credit= new Credit();
  form : boolean = false;
  config: any;
  

  constructor(private creditService : CreditService ,private modalService:NgbModal) { 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 5

    };
  }

  ngOnInit(): void {


    this.creditService.getAllCredits().subscribe((response: any) => {
      this.branches = response;
        
      });
    
    this.credit={
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
  //sessionStorage.getItem("id")
  addLoan() {
    this.creditService.addLoan(this.credit1, sessionStorage.getItem("id")).subscribe(() => {
      this.getAllCredits();
    });
  

  }
  open(content: any): void {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
    }
    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return  `with: ${reason}`;
      }
    }
    closeForm(){
  
    }
    cancel(){
      this.form = false;
    }
  
  




}
