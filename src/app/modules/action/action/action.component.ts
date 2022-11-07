import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActionService} from "../../../services/action.service";
import { Action } from '../../../models/action';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
//import * as CanvasJS from 'src/assets/canvasjs.min';
import * as $ from 'jquery';
@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @ViewChild( 'containerDivTape', { static: false } ) containerDivTape: ElementRef;
  private config: any;
  listActions: any;
  Action!: Action;
  branches: any = [];
  selectedValue = null;
  constructor(private actionService: ActionService,public dialog: MatDialog) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 5
    }
  }
  tickers = [
  "AMZN",
  "MULN",
 "AAPL",
  "META",
  "INTC",
  "AMD",
 "TSLA",
  "KAL",
  "NVDA",
  "CORZ",
  "GOOGL",
  "DBGI",
  "AGLE",
  "MSFT",
  "GOOG",
  "CMCSA",
  "SOFI",
  "GILD",
  "AAL",
  "COMS",
  "WISH",
  "HAAC",
  "AGNC",
  "ZVO",
  "MU",
  "WBD",
  "EPIX",
  "CSCO",
  "MARA",
  "FFIE",
  "TCDA",
  "AGFY",
  "PLUG",
  "PYPL"
  ]
  selected = " ";
  private widgetId: string;
  private settings: any;
  ngOnInit(): void {
    this.actionService.getAllActions().subscribe((response: any) => {
      this.branches = response;
    });
    this.getAllActions();
    this.Action = {
      idAction: null,
      symbole: null,
      volume: null,
      high: null,
      close: null,
      low: null,
      capital: null,
      TitreActions: null,
    }
  }

  ngAfterViewInit() {
    this.settings = {
      "symbols": [
        {
          "proName": "FOREXCOM:SPXUSD",
          "title": "S&P 500"
        },
        {
          "proName": "FOREXCOM:NSXUSD",
          "title": "US 100"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "proName": "CAC40",
        }
      ],
      showSymbolLogo: true,
      colorTheme: 'light',
      isTransparent: false,
      displayMode: "adaptive",
      locale: 'fr',
    };


    const scriptTape = document.createElement( 'script' );
    scriptTape.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    scriptTape.async = true;
    scriptTape.id = this.widgetId;
    scriptTape.innerHTML = JSON.stringify( this.settings );

    this.containerDivTape.nativeElement.appendChild( scriptTape );
  }

  getAllActions() {
    this.actionService.getAllActions().subscribe(res => this.listActions = res);
  }

  addAction(p:any,id:any) {
    this.actionService.addAction(p, id).subscribe(() => {
      this.getAllActions();
    });
  }
  deleteAction(idL: any) {
    this.actionService.deleteAction(idL).subscribe(() => this.getAllActions());

  }
  openDialog(template: any) : void {
    this.dialog.open(template, {
      width: '550px',

    });
  }
  update(e: any){
    this.selected = e.target.value
  }

  /*
  loadData(){
    const dataPoints: { x: number; y: number; }[] = [];
    $.get("http://localhost:8082/banqueenligne/action/retrieve-all-actions", function(List) {
      $(List).each(function (i) {
        var $dataPoint = $(this);

        var x = List[i].loanRef;
        var y = List[i].score;


        dataPoints.push({x: parseFloat(x), y: parseFloat(y)});
      });

      var chart = new CanvasJS.Chart("chartContainer3", {
        animationEnabled: true,
        title: {
          text: "Score Distribution - Pie Chart",
        },
        data: [{
          type: "pie",
          indexLabel: "{y}" ,
          dataPoints: dataPoints,
        }]
      });


      chart.render();

    });


  }*/
}
