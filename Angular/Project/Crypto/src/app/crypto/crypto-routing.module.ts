import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentCryptoComponent } from './current-crypto/current-crypto.component';
import { CryptoNewsComponent } from './crypto-news/crypto-news.component';
import { CurrentCryptoNewComponent } from './current-crypto-new/current-crypto-new.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthActivate } from '../core/guards/auth.activate';


const routes: Routes = [{
  path: 'cryptos/:cryptoId',
  component: CurrentCryptoComponent,
},
{
  path: 'crypto-news',
  component: CryptoNewsComponent
},
{
  path: 'crypto-news/:description',
  component: CurrentCryptoNewComponent,
  canActivate: [AuthActivate]
},
{
  path: '**', component: NotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }
