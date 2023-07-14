import { Directive, ElementRef, OnInit, Renderer2, AfterViewInit, OnChanges, SimpleChanges, Input } from '@angular/core';
import { CryptoService } from '../services/crypto-service.service';
@Directive({
  selector: '[appCryptoDirective]'
})
export class CryptoDirectiveDirective implements OnChanges {
  @Input() currentPrice: string = '';
  previousValue: string | undefined;
  // cryptoData$ = interval(3000).pipe(switchMap(() => this.cryptoService.getCryptoData(this.symbol)));

  constructor(private elementRef: ElementRef, private renderer: Renderer2, private cryptoService: CryptoService,) { }

  ngOnChanges(SimpleChanges: SimpleChanges): void {
    this.previousValue = SimpleChanges['currentPrice']?.previousValue;
    if (this.previousValue) {
      if (Number(this.currentPrice) > Number(this.previousValue)) {
        this.renderer.addClass(this.elementRef.nativeElement, 'red');
        setTimeout(()=>{
          this.renderer.removeClass(this.elementRef.nativeElement, 'red');
        },3500);
      }
      else {
        this.renderer.addClass(this.elementRef.nativeElement, 'green');
        setTimeout(()=>{
          this.renderer.removeClass(this.elementRef.nativeElement, 'green');
        },3500);
      }
    }
  }



}








