import { Component, OnInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service.service';
import { ActivatedRoute } from '@angular/router';
import { CryptoInfo } from 'src/app/types/crypto';
@Component({
  selector: 'app-current-crypto',
  templateUrl: './current-crypto.component.html',
  styleUrls: ['./current-crypto.component.css']
})
export class CurrentCryptoComponent implements OnInit {
  constructor(private cryptoService: CryptoService, private route: ActivatedRoute){}
  id: string| undefined;
  data: CryptoInfo | undefined;
  price: number | undefined;
  ngOnInit(): void {
    this.id = this.route.snapshot.params['cryptoId'];
    if(this.id){
      this.cryptoService.getSingleCryptoData(this.id).subscribe({
        next: (value)=> {
          this.data = value.data;
          this.price = Number(Number(this.data.priceUsd).toFixed(2))
        }, error: (error)=> console.log(error)
      })
    }
  }
}
