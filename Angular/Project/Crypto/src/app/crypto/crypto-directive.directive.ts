import { Directive, ElementRef, Renderer2, Provider } from '@angular/core';
@Directive({
  selector: '[appCryptoDirective]'
})
export class CryptoDirectiveDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  getColorPrice(oldPrice: number, price: number): void {
    if (oldPrice > price) {
      this.renderer.addClass(this.elementRef.nativeElement, 'red');
    }
    else {
      this.renderer.addClass(this.elementRef.nativeElement, 'green');
    }
  }

}



