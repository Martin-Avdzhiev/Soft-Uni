import { Component, OnInit, AfterViewInit, DoCheck } from '@angular/core';
import { CryptoService } from 'src/app/services/crypto-service.service';
import { ActivatedRoute } from '@angular/router';
import { LocalCryptoData } from 'src/app/types/crypto';
import { animate, state, style, transition, trigger, } from '@angular/animations';
import { CookieService } from 'ngx-cookie-service';
import { AuthServiceService } from 'src/app/services/auth-service.service'; 

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
export class CurrentCryptoComponent implements OnInit, AfterViewInit, DoCheck {
  constructor(private authService: AuthServiceService,private cryptoService: CryptoService, private route: ActivatedRoute, private cookieService: CookieService) { }
  id: string | undefined;
  price: string | undefined;
  name: string  = '';
  localData = new LocalCryptoData();
  alt: string | undefined;
  showBuyCryptoDiv: boolean = false;
  currentAmount: number = 0;
  payAmount: number = 0;
  error: string | undefined;
  username: string | undefined;
  showBuyCrypto(){
    if(!this.showBuyCryptoDiv){this.currentAmount = 0;}
    this.showBuyCryptoDiv = !this.showBuyCryptoDiv;
    this.cookieService.delete('error')
  }
  onKey(event:any){
   this.currentAmount = event.target.value;
  }
  buyCrypto(amount: any){
    this.payAmount = Number(amount.value) * Number(this.price);
    this.authService.buyCrypto(this.payAmount, this.name, Number(amount.value));
  }

  ngDoCheck(): void {
    this.error = this.cookieService.get('error');
    if(this.error == 'undefined') this.error = undefined;
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['cryptoId'];
    this.username = this.cookieService.get('username');
    if(this.username == 'undefined') this.username = undefined;
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
            this.name = value?.name;
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
