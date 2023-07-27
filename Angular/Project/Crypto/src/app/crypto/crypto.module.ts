import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoDirectiveDirective } from './crypto-directive.directive';
import { CryptoRoutingModule } from './crypto-routing.module';
import { CurrentCryptoComponent } from './current-crypto/current-crypto.component'
import { CryptoNewsComponent } from './crypto-news/crypto-news.component';
import { CurrentCryptoNewComponent } from './current-crypto-new/current-crypto-new.component';
import { WalletComponent } from './wallet/wallet.component';



@NgModule({
  declarations: [CryptoListComponent,
    CryptoDirectiveDirective,
    CurrentCryptoComponent,
    CryptoNewsComponent,
    CurrentCryptoNewComponent,
    WalletComponent
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
