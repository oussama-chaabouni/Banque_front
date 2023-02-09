import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActionService} from "../../../services/action.service";
import { Action } from '../../../models/action';
import { CompteTitre } from '../../../models/compteTitre';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ChartComponent } from "ng-apexcharts";
//import * as CanvasJS from 'src/assets/canvasjs.min';
import {
  ApexNonAxisChartSeries,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid
} from "ng-apexcharts";

type ApexXAxis = {
  type?: "category" | "datetime" | "numeric";
  categories?: any;
  labels?: {
    style?: {
      colors?: string | string[];
      fontSize?: string;
    };
  };
};

export type ChartOptions = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

export type ChartOptionsBar = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss']
})
export class ActionComponent implements OnInit {
  @ViewChild( 'containerDivTape', { static: false } ) containerDivTape: ElementRef;
  @ViewChild("chart") chart: ChartComponent;
  @ViewChild("Barchart") Barchart: ChartComponent;
  @ViewChild('tabGroupAction') tabGroupAction: any;
  selectedOption2!: string ;
  public chartOptions: Partial<ChartOptions>| any;
  public chartOptionsBar: Partial<ChartOptionsBar>| any;
  private config: any;
  listActions: any;
  Action!: Action;
  CompteTitre!: CompteTitre;
  branches: any = [];
  selectedValue = "Value At Risk Theorique";
  listTitres: any;
  branches2 : any = [];
  listVar: any;
  Time: 250;
  confiance: 95;
  Theorique: any;
  Historique: any;
  choix: "Theorique";
  id=sessionStorage.getItem("id")
  constructor(private actionService: ActionService,public dialog: MatDialog) {
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: 5
    }
    this.CompteTitre = {
      solde:null
    }
    this.chartOptions = {
      series: [],
      chart: {
        width: 380,
        type: "pie"
      },
      labels: [],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: "bottom"
            }
          }
        }
      ]
    };

    this.chartOptionsBar = {
      series: [
      ],
      chart: {
        height: 450,
        type: "bar"
      },
      colors: [
        "#008FFB",
        "#00E396",
        "#FEB019",
        "#FF4560",
        "#775DD0",
        "#546E7A",
        "#26a69a",
        "#D10CE8"
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "45%",
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: true
      },
      xaxis: {

        labels: {
          style: {
            colors: [
            ],
            fontSize: "12px"
          }
        }
      },
      yaxis: {
        reversed: true,
      }
    };

  }
  optionsCh=["Value At Risk Theorique","Value At Risk Historique"]
  tickers = [
    "ABF.L",
    "LLOY.L",
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

  getData(){

  }


  ngOnInit(): void {
    this.actionService.getAllActions().subscribe((response: any) => {
      this.actionService.retrieveCompteTitre(this.id).subscribe((response2: any) => {
        this.branches = response;
        this.chartOptions.series =  response.map( (item: any) => item.valeurActuelle);
        this.chartOptions.labels=
          response.map((item: any) => item.symbole);

        this.chartOptions.series.push(response2[0].solde) ;
        this.chartOptions.labels.push("Liquidité") ;
        });
      });
    this.actionService.VarTheorique(1,250,95).subscribe((response3:any) => {
      console.log(Object.values(response3));
      this.chartOptionsBar.series=[{
        data :Object.values(response3)
      }]
      this.chartOptionsBar.xaxis={
        categories :Object.keys(response3)
      };
    });


    setInterval(() => this.getAllActions(), 40000);
    this.Action = {
      idAction: null,
      symbole: null,
      volume: null,
      high: null,
      close: null,
      low: null,
      capital: null,
      valeurActuelle:null,
    }
    this.retrieveCompteTitre(this.id);
    this.CompteTitre = {
      solde:null
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
    };

  addAction(p:any,id:any) {
    this.actionService.addAction(p, id).subscribe(() => {
      this.retrieveCompteTitre(id);
      this.updateChart()
      this.updateBarChart(1,this.Time,this.confiance,this.selectedOption2);
    });
  }
  deleteAction(idL: any) {
    this.actionService.deleteAction(idL).subscribe(() => this.getAllActions());

  }
  sellAction(idL: any) {
    this.actionService.sellAction(idL).subscribe(() =>{
      this.retrieveCompteTitre(this.id)
      this.updateChart();
      this.updateBarChart(1,this.Time,this.confiance,this.selectedOption2);
    });
  }
  retrieveCompteTitre(idL: any) {
    this.actionService.retrieveCompteTitre(idL).subscribe(res => this.listTitres = res);
    this.actionService.getAllActions().subscribe(res => this.listActions = res);
  }
  openDialog(template: any) : void {
    this.dialog.open(template, {
      width: '550px',

    });
  }
  update(e: any){
    this.selected = e.target.value
  }
  updateChart(){
    this.actionService.getAllActions().subscribe((response: any) => {
      this.actionService.retrieveCompteTitre(this.id).subscribe((response2: any) => {
        this.branches = response;
        this.chartOptions.series =  response.map( (item: any) => item.valeurActuelle);
        this.chartOptions.labels=
          response.map((item: any) => item.symbole);

        this.chartOptions.series.push(response2[0].solde) ;
        this.chartOptions.labels.push("Liquidité") ;
      });
    });
  }

  VarTheorique(Year: any,Time: any,confiance: any) {
    this.actionService.VarTheorique(1,Time,confiance).subscribe(res => this.listVar = res);
  }

  VarHistorique(Year: any,Time: any,confiance: any) {
    this.actionService.VarHistorique(1,Time,confiance).subscribe(res => this.listVar = res);
  }

  updateBarChart(Year: any,Time: any,confiance: any,selectedOption2: any){
    if (selectedOption2=="Theorique"){
    this.actionService.VarTheorique(1,Time,confiance).subscribe((response3:any) => {
      console.log(Object.values(response3));
      this.chartOptionsBar.series=[{
        data :Object.values(response3)
      }]
      this.chartOptionsBar.xaxis={
        categories :Object.keys(response3)
      };
    });
    }else{
      this.actionService.VarHistorique(1,Time,confiance).subscribe((response3:any) => {
        console.log(Object.values(response3));
        this.chartOptionsBar.series=[{
          data :Object.values(response3)
        }]
        this.chartOptionsBar.xaxis={
          categories :Object.keys(response3)
        };
      });
    }
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
