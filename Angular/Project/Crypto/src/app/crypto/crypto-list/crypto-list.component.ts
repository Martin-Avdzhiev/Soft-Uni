import { Component, OnInit, OnChanges, SimpleChanges, AfterViewInit } from '@angular/core';
import { CryptoService } from '../../services/crypto-service.service';
import { CryptoInfo } from '../../types/crypto';
import { processedCryptoData, processedCryptoDataClass } from '../../types/processedCryptoData';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})


export class CryptoListComponent implements OnInit, OnChanges,AfterViewInit {
  data: CryptoInfo | undefined;
  price: number = 0;
  interval: any;
  isPumping: boolean = false;
  isLoading: boolean = true;
  marketCap: string = '';
  oldArray: processedCryptoData[] = [];
  cryptos: string = 'bitcoin,ethereum,xrp';
  processedDataArray: processedCryptoData[] = [];
  processedData = new processedCryptoDataClass();


  constructor(private cryptoService: CryptoService) { }

  trackBy(index: number, item: processedCryptoDataClass) {
    return item?.id;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

ngAfterViewInit(): void {
  // setInterval(()=> {
  //   this.ngOnInit();
  // },30000)
}
  ngOnInit() {
   //  this.interval = setInterval(() => {

    this.cryptoService.getCryptoData(this.cryptos).subscribe({
      next: (result) => {
          this.processedDataArray = result?.data.map((value) => {
          this.processedData = new processedCryptoDataClass();
          this.marketCap = this.cryptoService.transformMarketCap(value.marketCapUsd);
          this.price = Number(Number(value.priceUsd).toFixed(2));
          this.isPumping = Number(value.changePercent24Hr) >= 0;
          this.processedData.routerLinkVariable = `/cryptos/${value.id}`;
          this.processedData.marketCap = this.marketCap;
          this.processedData.price = this.price.toFixed(2);
          this.processedData.isPumping = this.isPumping;
          this.processedData.name = value.name;
          this.processedData.symbol = value?.symbol;
          this.processedData.oldMarketCap = Number(value.marketCapUsd);
          this.processedData.changePercent24Hr = Number(Number(value.changePercent24Hr).toFixed(3));
          this.processedData.id = value.id;
          this.isLoading = false;
          this.cryptoService.sortByMarketCap(this.processedDataArray);
          return this.processedData;
        })
      }
    });
    this.oldArray = this.processedDataArray;
    //  }, 3000);
  }
}
//  ngAfterViewInit(){
 //   this.span.nativeElement.setAttribute('highlight', '');
 // } 
