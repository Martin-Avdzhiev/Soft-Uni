import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service.service';
import { ActivatedRoute } from '@angular/router';
import { CryptoData, PostCryptoData } from 'src/app/types/crypto';
@Component({
  selector: 'app-current-crypto',
  templateUrl: './current-crypto.component.html',
  styleUrls: ['./current-crypto.component.css']
})
export class CurrentCryptoComponent implements OnInit {
  constructor(private cryptoService: CryptoService, private route: ActivatedRoute){}
  id: string| undefined;
  price: string | undefined;
  postData = new PostCryptoData()

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cryptoId'];
    if(this.id){
      this.cryptoService.getCryptoData(this.id).subscribe({
        next: (value)=> this.price = Number(value?.data[0].priceUsd).toFixed(2),
        error: (error) => console.log(error)
      });
      this.cryptoService.getSingleCryptoData(this.id).subscribe({
        next: (value)=> {
         // this.price = Number(this.data.priceUsd).toFixed(2);
          this.postData = new PostCryptoData();
          if(value){
            this.postData.id = value?.id;
            this.postData.rank = value?.rank;
            this.postData.symbol = value?.symbol;
            this.postData.name = value?.name;
            this.postData.supply = value?.supply;
            this.postData.maxSupply = value?.maxSupply;
            this.postData.explorer = value?.explorer;
            this.postData.description = value?.description;
            this.price = this.cryptoService.transformPrice(this.price!,this.postData.name);
          }
        }, error: (error)=> console.log(error)
      })

    }
  }
}
