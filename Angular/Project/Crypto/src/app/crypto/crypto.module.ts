import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoDirectiveDirective } from './crypto-directive.directive';



@NgModule({
  declarations: [CryptoListComponent, CryptoDirectiveDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CryptoListComponent
  ]
})
export class CryptoModule { }
