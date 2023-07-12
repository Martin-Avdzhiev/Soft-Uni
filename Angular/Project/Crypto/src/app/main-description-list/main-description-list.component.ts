import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../services/crypto-service.service';
import { processedLocalCryptoDataClass } from '../types/processedCryptoData';
import { CryptoData } from '../types/crypto';

@Component({
  selector: 'app-main-description-list',
  templateUrl: './main-description-list.component.html',
  styleUrls: ['./main-description-list.component.css']
})
export class MainDescriptionListComponent implements OnInit {
  data: CryptoData | undefined;
  price: string | undefined;
  interval: any;
  isPumping: boolean = false;
  isLoading: boolean = true;
  marketCap: string = '';
  cryptos: string = 'bitcoin,ethereum,xrp';
  cryptosArray: [string, string, string] = ['bitcoin', 'ethereum', 'xrp'];
  processedLocalDataArray: processedLocalCryptoDataClass[] = [];
  processedLocalData = new processedLocalCryptoDataClass();

  constructor(private cryptoService: CryptoService) { }



  ngOnInit(): void {
    this.cryptoService.getLocalAllCryptoData().subscribe({
      next: (result)=> {
        this.processedLocalDataArray = result.map((crypto) => {
          return crypto
        })
      },
      error:(error) => console.log(error)
    })
  }
}
