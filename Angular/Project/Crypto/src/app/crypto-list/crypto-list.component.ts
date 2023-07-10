import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto-service.service';
import { CryptoInfo } from '../types/crypto';
import { processedCryptoData, processedCryptoDataClass } from '../types/processedCryptoData';
@Component({
  selector: 'app-crypto-list',
  templateUrl: './crypto-list.component.html',
  styleUrls: ['./crypto-list.component.css']
})
export class CryptoListComponent implements OnInit {
  data: CryptoInfo | undefined;
  price: number = 0;
  interval: any;
  isPumping: boolean = false;
  oldPrice: number = 0;
  isLoading: boolean = true;
  marketCap: string = '';
  cryptos: any = ['bitcoin', 'ethereum', 'xrp'];
  processedDataArray: processedCryptoData[] = [];
  processedData = new processedCryptoDataClass();
      constructor(private cryptoService: CryptoService){}
  ngOnInit() {
    //this.interval = setInterval(() => {  
        this.processedDataArray = [];
    for (const crypto of this.cryptos) {

      this.cryptoService.getCryptoData(`/${crypto}`).subscribe({
        next: (value) => {
          this.processedData = new processedCryptoDataClass();
          this.data = value.data;
          this.marketCap = this.cryptoService.transformMarketCap(this.data.marketCapUsd);
          this.price = Number(Number(this.data.priceUsd).toFixed(2));
          this.isLoading = false;
          if (this.oldPrice <= this.price) {
            this.isPumping = true;
          }
          else {
            this.isPumping = false;
          }
          this.oldPrice = this.price;
          this.processedData.marketCap = this.marketCap;
          this.processedData.price = this.price;
          this.processedData.isPumping = this.isPumping;
          this.processedData.name = this.data.name;
          this.processedData.symbol = this.data.symbol;
          this.processedData.oldMarketCap = Number(this.data.marketCapUsd);
          this.processedDataArray.push(this.processedData);
          this.cryptoService.sortByMarketCap(this.processedDataArray);
        }
      })
    }
  //  }, 8000);
  }
}