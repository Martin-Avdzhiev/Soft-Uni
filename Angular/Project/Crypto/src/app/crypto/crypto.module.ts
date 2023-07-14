import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoDirectiveDirective } from './crypto-directive.directive';
import { CryptoRoutingModule } from './crypto-routing.module';
import { CurrentCryptoComponent } from './current-crypto/current-crypto.component';



@NgModule({
  declarations: [CryptoListComponent,
    CryptoDirectiveDirective,
    CurrentCryptoComponent
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule
  ],
  exports: [
    CryptoListComponent
  ]
})
export class CryptoModule { }
