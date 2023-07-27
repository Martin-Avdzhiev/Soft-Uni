import { Component, OnInit, AfterViewInit } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service.service';
import { ActivatedRoute } from '@angular/router';
import { LocalCryptoData } from 'src/app/types/crypto';
import { animate, state, style, transition, trigger, } from '@angular/animations';

const enterTransition = transition(':enter', [
  style({
    opacity: 0,
  }),
  animate('0.5s ease-in', style({ opacity: 1 })),
]);
const exitTransition = transition(':leave', [
  style({
    opacity: 1,
  }),
  animate('0.5s ease-out', style({ opacity: 0 })),
]);
const fadeIn = trigger('fadeIn', [enterTransition]);
const fadeOut = trigger('fadeOut', [exitTransition]);

@Component({
  selector: 'app-current-crypto',
  templateUrl: './current-crypto.component.html',
  styleUrls: ['./current-crypto.component.css'],
  animations: [fadeIn, fadeOut]
})
export class CurrentCryptoComponent implements OnInit, AfterViewInit {
  constructor(private cryptoService: CryptoService, private route: ActivatedRoute) { }
  id: string | undefined;
  price: string | undefined;
  localData = new LocalCryptoData();
  alt: string | undefined;
  showBuyCryptoDiv: boolean = false;
  currentAmount: number = 0;
  showBuyCrypto(){
    this.showBuyCryptoDiv = !this.showBuyCryptoDiv;
  }
  onKey(event:any){
   this.currentAmount = event.target.value;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['cryptoId'];
    if (this.id) {
      this.cryptoService.getCryptoData(this.id).subscribe({
        next: (value) => {
          this.price = this.cryptoService.transformPrice(value?.data[0].priceUsd);
        },
        error: (error) => console.log(error)
      });
      this.cryptoService.getLocalSingleCryptoData(this.id).subscribe({
        next: (value) => {
          this.localData = new LocalCryptoData();
          if (value) {
            this.localData.id = value?.id;
            this.localData.rank = value?.rank;
            this.localData.symbol = value?.symbol;
            this.localData.name = value?.name;
            this.localData.supply = value?.supply;
            this.localData.maxSupply = value?.maxSupply;
            this.localData.explorer = value?.explorer;
            this.localData.description = value?.description;
            this.localData.image = value?.image;
            this.alt = value?.name + ' image';
          }
        }, error: (error) => console.log(error)
      })
    }
  }

  ngAfterViewInit(): void {
    //  setInterval(()=> {
    if (this.id) {
      this.cryptoService.getCryptoData(this.id).subscribe({
        next: (value) => this.price = this.cryptoService.transformPrice(value?.data[0].priceUsd),
        error: (error) => console.log(error)
      });
    }
    //    },30000)
  }
}
