import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../services/crypto-service.service';
import { CryptoInfo } from '../../types/crypto';
import { processedCryptoData, processedCryptoDataClass } from '../../types/processedCryptoData';
import { CryptoDirectiveDirective } from '../crypto-directive.directive';
@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit /*, AfterVieInit */ {
  data: CryptoInfo | undefined;
  price: number = 0;
  interval: any;
  isPumping: boolean = false;
  isLoading: boolean = true;
  marketCap: string = '';
  cryptos: any = [{name: 'bitcoin', oldPrice: 0}, {name: 'ethereum', oldPrice: 0}, {name: 'xrp', oldPrice: 0}];
  processedDataArray: processedCryptoData[] = [];
  processedData = new processedCryptoDataClass();
      constructor(private cryptoService: CryptoService){}
  ngOnInit() {

   // this.interval = setInterval(() => {  
        this.processedDataArray = [];

    for (const crypto of this.cryptos) {
      this.cryptoService.getCryptoData(`/${crypto.name}`).subscribe({
        next: (value) => {
          this.processedData = new processedCryptoDataClass();
          this.data = value.data;
          this.marketCap = this.cryptoService.transformMarketCap(this.data.marketCapUsd);
          this.price = Number(Number(this.data.priceUsd).toFixed(2));
          if (Number(this.data.changePercent24Hr) >= 0) {
            this.isPumping = true;
          }
          else {
            this.isPumping = false;
          }
          this.processedData.marketCap = this.marketCap;
          this.processedData.price = this.price.toFixed(2);
          this.processedData.isPumping = this.isPumping;
          this.processedData.name = this.data.name;
          this.processedData.symbol = this.data.symbol;
          this.processedData.oldMarketCap = Number(this.data.marketCapUsd);
          this.processedData.changePercent24Hr = Number(Number(this.data.changePercent24Hr).toFixed(3));
          this.processedDataArray.push(this.processedData);
          this.cryptoService.sortByMarketCap(this.processedDataArray);
          this.isLoading = false;
        }
      })
    }
  //}, 5000);
  //   this.interval = setInterval(() => { 
  //     this.cryptoDirective.getColorPrice(this.oldPrice,this.price)
  //  }, 3000);
  }

//  ngAfterViewInit(){
 //   this.span.nativeElement.setAttribute('highlight', '');
 // } 
}