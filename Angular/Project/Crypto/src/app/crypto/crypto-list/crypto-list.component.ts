import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CryptoService } from '../../services/crypto-service.service';
import { CryptoData } from '../../types/crypto';
import { processedCryptoData, processedCryptoDataClass } from '../../types/processedCryptoData';

@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})


export class CryptoListComponent implements OnInit, AfterViewInit {
  data: CryptoData | undefined;
  price: string | undefined;
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

  ngAfterViewInit(): void {
    setInterval(()=> {
      this.ngOnInit();
    },30000)
  }
  ngOnInit() {
    this.cryptoService.getCryptoData(this.cryptos).subscribe({
      next: (result) => {
        this.processedDataArray = result?.data.map((value) => {
          this.processedData = new processedCryptoDataClass();
          this.marketCap = this.cryptoService.transformMarketCap(value.marketCapUsd);
          this.isPumping = Number(value.changePercent24Hr) >= 0;
          this.processedData.routerLinkVariable = `/cryptos/${value.id}`;
          this.processedData.marketCap = this.marketCap;
          this.processedData.name = value.name; this.price = value.priceUsd;
          this.processedData.price =  this.cryptoService.transformPrice(this.price);
          this.processedData.isPumping = this.isPumping;
          this.processedData.symbol = value.symbol;this.processedData.id = value.id;
          this.processedData.oldMarketCap = Number(value.marketCapUsd);
          this.processedData.changePercent24Hr = Number(Number(value.changePercent24Hr).toFixed(3));
          this.isLoading = false;
          this.cryptoService.sortByMarketCap(this.processedDataArray);
          return this.processedData;
        })
      }
    });
    this.oldArray = this.processedDataArray;

  }
}
//  ngAfterViewInit(){
 //   this.span.nativeElement.setAttribute('highlight', '');
 // } 
