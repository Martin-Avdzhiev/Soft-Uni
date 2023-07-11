import { Directive, ElementRef, OnInit, Renderer2, AfterViewInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CryptoService } from '../services/crypto-service.service';
@Directive({
  selector: '[appCryptoDirective]'
})
export class CryptoDirectiveDirective {
  @Input() symbol: string = '';
  price: number | undefined;
  oldPrice: number = 0;
  interval: any;
 // cryptoData$ = interval(3000).pipe(switchMap(() => this.cryptoService.getCryptoData(this.symbol)));

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private cryptoService: CryptoService) { }

  // loadPriceColor(price:number){
  //   if(this.oldPrice < price){
  //     this.renderer.addClass(this.elementRef.nativeElement,'green');
  //   }
  //   else{
  //     this.renderer.addClass(this.elementRef.nativeElement,'red');
  //   }
  //   this.oldPrice = price;
  // }

  
  }



    




