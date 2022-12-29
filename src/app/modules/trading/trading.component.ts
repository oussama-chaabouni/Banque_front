import {Component, AfterViewInit, ElementRef, Renderer2, ViewChild, Input} from '@angular/core';
import {MatTabChangeEvent} from "@angular/material/tabs";


declare const TradingView: any;

@Component({
  selector: 'app-trading',
  templateUrl: './trading.component.html',
  styleUrls: ['./trading.component.css']
})



export class TradingComponent implements AfterViewInit {
  @Input() symbol: string = '';
  @Input() description: string = '';
  @ViewChild('tradingview') tradingview?: ElementRef;
  @ViewChild('tabGroup') tabGroup: any;
  @ViewChild( 'containerDiv', { static: false } ) containerDiv: ElementRef;
  @ViewChild( 'containerDivAnalyse', { static: false } ) containerDivAnalyse: ElementRef;
  @ViewChild( 'containerDivTape', { static: false } ) containerDivTape: ElementRef;
  selectedOption:any ;
  tickers = [
    "LSE:ABF",
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
  private widgetId: string;
  private settings: any;
  private settings2: any;
  display = false;
  constructor(private _renderer2: Renderer2) { }
  ngOnInit() {
  }
  ngAfterViewInit() {
  }

  updatechart (select: string) {

    if(this.tabGroup.selectedIndex==0){
      this.settings = {
        symbol: select,
        colorTheme: 'light',
        isTransparent: false,
        largeChartUrl: '',
        displayMode: 'regular',
        height: 800,
        width:1200,
        locale: 'fr',
      };
      const script = document.createElement( 'script' );
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
      script.async = true;
      script.id = this.widgetId;
      script.innerHTML = JSON.stringify( this.settings );
      document.getElementById('info')!.innerHTML = '';

      this.containerDiv.nativeElement.appendChild( script );

    }else if(this.tabGroup.selectedIndex==1){
      new TradingView.widget(
        {
          "width": 1300,
          "height": 710,
          "symbol": select,
          "timezone": "Etc/UTC",
          "theme": "Light",
          "style": "1",
          "locale": "fr",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "withdateranges": true,
          "range": "ytd",
          "hide_side_toolbar": false,
          "allow_symbol_change": false,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "no_referral_id": true,
          "details": true,
          "container_id": "tradingview_bac65",
        }
      )

    }else if (this.tabGroup.selectedIndex == 2){
      this.settings2 = {
        symbol: select,
        colorTheme: 'light',
        isTransparent: false,
        interval: '1m',
        height: 800,
        width: 1200,
        showIntervalTabs: true,
        locale: 'fr',
      };
      const script2 = document.createElement( 'script' );
      script2.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
      script2.async = true;
      script2.id = this.widgetId;
      script2.innerHTML = JSON.stringify( this.settings2 );
      document.getElementById('analyse')!.innerHTML = '';

      this.containerDivAnalyse.nativeElement.appendChild( script2 );
    }
  } ;

  onPress(tabChangeEvent: MatTabChangeEvent,select: string) {
    if (this.tabGroup.selectedIndex === 0) {
      this.settings = {
        symbol: select,
        colorTheme: 'light',
        isTransparent: false,
        largeChartUrl: '',
        displayMode: 'regular',
        height: 800,
        width: 1200,
        locale: 'fr'
      };
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
      script.async = true;
      script.id = this.widgetId;
      script.innerHTML = JSON.stringify(this.settings);
      document.getElementById('tv-widget-fundamentals')!.style.fontSize="30px";
      document.getElementById('info')!.innerHTML = '';

      this.containerDiv.nativeElement.appendChild(script);

    } else if (this.tabGroup.selectedIndex === 1) {


      new TradingView.widget(
        {
          "width": 1300,
          "height": 710,
          "symbol": select,
          "timezone": "Etc/UTC",
          "theme": "Light",
          "style": "1",
          "locale": "fr",
          "toolbar_bg": "#f1f3f6",
          "enable_publishing": false,
          "withdateranges": true,
          "range": "ytd",
          "hide_side_toolbar": false,
          "allow_symbol_change": false,
          "show_popup_button": true,
          "popup_width": "1000",
          "popup_height": "650",
          "no_referral_id": true,
          "details": true,
          "container_id": "tradingview_bac65",
        }
      )

    } else if (this.tabGroup.selectedIndex === 2) {
      this.settings2 = {
        symbol: select,
        colorTheme: 'light',
        isTransparent: false,
        interval: '1m',
        height: 800,
        width: 1200,
        showIntervalTabs: true,
        locale: 'fr'
      };

    const script2 = document.createElement('script');
    script2.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
    script2.async = true;
    script2.id = this.widgetId;
    script2.innerHTML = JSON.stringify(this.settings2);
    document.getElementById('analyse')!.innerHTML = '';

    this.containerDivAnalyse.nativeElement.appendChild(script2);

  }

  }


}

