import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service.service';
import { CryptoNew } from 'src/app/types/crypto-new';

@Component({
  selector: 'app-crypto-news',
  templateUrl: './crypto-news.component.html',
  styleUrls: ['./crypto-news.component.css']
})

export class CryptoNewsComponent implements OnInit {
  data: CryptoNew[] | undefined;
  rawLink: string = '/crypto-news/';
  constructor(private cryptoService: CryptoService) { };
  ngOnInit(): void {
    this.cryptoService.getThreeCryptoNews().subscribe({
      next: (value) => {
        this.data = value.articles;
        this.data.map(x => {
          if (!x.urlToImage) { x.urlToImage = 'https://www.analyticsinsight.net/wp-content/uploads/2022/06/Next-Cryptocurrency-to-Explode-in-2022.jpg' }
          x.routerLinkVariable = this.rawLink + x.description;
        })
      },
      error: (error) => console.log(error)
    })
  }
}
