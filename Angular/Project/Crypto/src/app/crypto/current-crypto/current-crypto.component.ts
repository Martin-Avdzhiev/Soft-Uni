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
  data: CryptoData | undefined;
  price: number | undefined;
  postData = new PostCryptoData()

  ngOnInit(): void {
    this.id = this.route.snapshot.params['cryptoId'];
    if(this.id){
      this.cryptoService.getSingleCryptoData(this.id).subscribe({
        next: (value)=> {
          this.data = value?.data;
          this.price = Number(Number(this.data.priceUsd).toFixed(2));
          this.postData = new PostCryptoData();
          if(this.data){
            this.postData.id = this.data?.id
            this.postData.rank = this.data?.rank
            this.postData.symbol = this.data?.symbol
            this.postData.name = this.data?.name
            this.postData.supply = this.data?.supply
            this.postData.maxSupply = this.data?.maxSupply
            this.postData.explorer = this.data?.explorer
            this.postData.descripton = 'some description'
          }
        }, error: (error)=> console.log(error)
      })

    }
  }
}
