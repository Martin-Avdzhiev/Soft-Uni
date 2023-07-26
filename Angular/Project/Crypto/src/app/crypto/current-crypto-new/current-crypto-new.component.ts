import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service.service';
import { ActivatedRoute } from '@angular/router';
import { CryptoNew } from 'src/app/types/crypto-new';
@Component({
  selector: 'app-current-crypto-new',
  templateUrl: './current-crypto-new.component.html',
  styleUrls: ['./current-crypto-new.component.css']
})
export class CurrentCryptoNewComponent implements OnInit, AfterViewInit {
  description: string | undefined;
  data: CryptoNew | undefined;
  constructor(private cryptoService: CryptoService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (value) => {
        this.description = value['description'];
    },
      error: (error) => console.log(error)
    })
    if (!this.description) return;
    this.cryptoService.getSingleCryptoNewByDescription(this.description).subscribe({
      next: (value) => {
        this.data = value.articles[0];
      },
      error: (error) => console.log(error)
    });
    setTimeout(() => {
      if (this.data) {
        if (!this.data.urlToImage) {
          this.data.urlToImage = 'https://www.analyticsinsight.net/wp-content/uploads/2022/06/Next-Cryptocurrency-to-Explode-in-2022.jpg';
        }
      }
    }, 200);
  };

  ngAfterViewInit(): void {

  }
}
