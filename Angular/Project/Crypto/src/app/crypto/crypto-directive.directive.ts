import { Directive, ElementRef, Renderer2, OnChanges, SimpleChanges, Input } from '@angular/core';
@Directive({
  selector: '[appCryptoDirective]'
})
export class CryptoDirectiveDirective implements OnChanges {
  @Input() currentPrice: string = '';
  previousValue: string | undefined;

  constructor(private elementRef: ElementRef, private renderer: Renderer2,) { }

  ngOnChanges(SimpleChanges: SimpleChanges): void {
    this.previousValue = SimpleChanges['currentPrice']?.previousValue;
    if (this.previousValue) {
      if (Number(this.currentPrice) < Number(this.previousValue)) {
        this.renderer.addClass(this.elementRef.nativeElement, 'red');
        setTimeout(()=>{
          this.renderer.removeClass(this.elementRef.nativeElement, 'red');
        },5000);
      }
      else {
        this.renderer.addClass(this.elementRef.nativeElement, 'green');
        setTimeout(()=>{
          this.renderer.removeClass(this.elementRef.nativeElement, 'green');
        },5000);
      }
    }
  }

}








