import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CryptoData, LocalCryptoData } from '../types/crypto';
import { processedCryptoDataClass } from '../types/processedCryptoData'
import { CryptoNew } from '../types/crypto-new';
const cryptoApiUrl = 'https://api.coincap.io/v2/assets';
const localApiUrl = 'http://localhost:3000/api';
const cryptoNewsApiUrl = 'https://newsapi.org/v2/everything?q=bitcoin&pageSize=3&apiKey=11a117fc8dce43a6a79d7d6c8a77a83a';
const fisrtPartCryptoNewApiUrl = 'https://newsapi.org/v2/everything?q=' //between the two parts will be description
const secondPartCryptoNewApiUrl = '&apiKey=11a117fc8dce43a6a79d7d6c8a77a83a'
@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  transformedMarketCap: number = 0;
  stringMarketCap: string = '';

  constructor(private http: HttpClient) { }

  getSingleCryptoNewByDescription(description: string) {

    if (description.includes('.com')) { }
    else if (description) {
      const removeLastWord = description.split(' ');
      removeLastWord.pop();
      description = removeLastWord.join(' ');

    }
    return this.http.get<{ articles: CryptoNew[] }>(fisrtPartCryptoNewApiUrl + description + secondPartCryptoNewApiUrl);
  }

  getThreeCryptoNews() {
    return this.http.get<{ articles: CryptoNew[] }>(cryptoNewsApiUrl);
  }


  getCryptoData(crypto: string) {
    return this.http.get<{ data: CryptoData[] }>(`${cryptoApiUrl}?ids=${crypto}`);
  }

  getLocalSingleCryptoData(crypto: string) {
    return this.http.get<LocalCryptoData>(`${localApiUrl}/cryptos/${crypto}`);
  }

  getLocalAllCryptoData() {
    return this.http.get<LocalCryptoData[]>(`${localApiUrl}/cryptos/all`);
  }

  sortByMarketCap(array: processedCryptoDataClass[]) {
    return array.sort((a: processedCryptoDataClass, b: processedCryptoDataClass) => b.oldMarketCap - a.oldMarketCap);
  }

  postSingleCryptoData(data: LocalCryptoData, id: string) {
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

  transformPrice(price: string): string {
    let [integer, float] = price.split('.');
    if (Number(integer) < 100) {
      return Number(price).toFixed(3);
    }
    else { return Number(price).toFixed(2) };
  }
}