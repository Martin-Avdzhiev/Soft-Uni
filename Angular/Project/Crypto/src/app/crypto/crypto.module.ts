import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CryptoListComponent } from './crypto-list/crypto-list.component';
import { CryptoDirectiveDirective } from './crypto-directive.directive';
import { CryptoRoutingModule } from './crypto-routing.module';
import { CurrentCryptoComponent } from './current-crypto/current-crypto.component'
import { CryptoNewsComponent } from './crypto-news/crypto-news.component';
import { CurrentCryptoNewComponent } from './current-crypto-new/current-crypto-new.component';
import { WalletComponent } from './wallet/wallet.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplyPipePipe } from './multiply-pipe.pipe';


@NgModule({
  declarations: [CryptoListComponent,
    CryptoDirectiveDirective,
    CurrentCryptoComponent,
    CryptoNewsComponent,
    CurrentCryptoNewComponent,
    WalletComponent,
    MultiplyPipePipe
  ],
  imports: [
    CommonModule,
    CryptoRoutingModule,
    BrowserAnimationsModule
  ],
  exports: [
    CryptoListComponent
  ]
})
export class CryptoModule { }
