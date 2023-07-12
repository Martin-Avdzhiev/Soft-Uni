import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoData, PostCryptoData } from '../types/crypto';
import { processedCryptoDataClass } from '../types/processedCryptoData'
const cryptoApiUrl = 'https://api.coincap.io/v2/assets'
const localApiUrl = 'http://localhost:3000/api'

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  transformedMarketCap: number = 0;
  stringMarketCap: string = '';

  constructor(private http: HttpClient) { }



  
  getCryptoData(crypto: string) {
    return this.http.get<{ data: CryptoData[] }>(`${cryptoApiUrl}?ids=${crypto}`);
  }
  
  getSingleCryptoData(crypto: string) {
    return this.http.get<PostCryptoData>(`${localApiUrl}/cryptos/${crypto}`);
  }

  sortByMarketCap(array: processedCryptoDataClass[]) {
    return array.sort((a: processedCryptoDataClass, b: processedCryptoDataClass) => b.oldMarketCap - a.oldMarketCap);
  }
  
  postSingleCryptoData(data: PostCryptoData, id: string) {
    console.log(`${localApiUrl}/cryptos/${id}`)
    return this.http.post(`${localApiUrl}/cryptos/${id}`, data).subscribe({
      next: (res) => {
        console.log(res)
      }, error: (error) => console.log(error)
    });
  }



  transformMarketCap(marketCap: string): string {
    this.transformedMarketCap = Math.trunc(Number(marketCap));
    this.stringMarketCap = '';
    // 12 345 678 900
    for (let i = 1; i <= this.transformedMarketCap.toString().length; i += 1) {
      this.stringMarketCap += this.transformedMarketCap.toString()[i - 1];

      if (this.transformedMarketCap.toString().length % 3 == 2) {
        if (i % 3 == 2 && i !== this.transformedMarketCap.toString().length) {
          this.stringMarketCap += ' ';
        }
      }

      if (this.transformedMarketCap.toString().length % 3 == 1) {
        if (i % 3 == 1 && i !== this.transformedMarketCap.toString().length) {
          this.stringMarketCap += ' ';
        }
      }
      if (this.transformedMarketCap.toString().length % 3 == 0) {
        if (i % 3 == 0 && i !== this.transformedMarketCap.toString().length) {
          this.stringMarketCap += ' ';
        }
      }


    }
    return this.stringMarketCap
  }

  transformPrice(price: string, crypto: string): string {
    let [integer, float] = price.split('.');
    if (!float) {
      if (crypto == 'XRP') { return integer + '.000' }
      else { return integer + '.00' }
    }
    if (float?.length < 2 && crypto != 'XRP') {
      if (float?.length < 2) { return integer + '.' + float + '0' }
      return integer
    }
    else if (float?.length < 3 && crypto == 'XRP') {
      if (float?.length < 2) { return integer + '.' + float + '00' }
      else if (float?.length < 3) { return integer + '.' + float + '0' }
    }
    return price
  }
}