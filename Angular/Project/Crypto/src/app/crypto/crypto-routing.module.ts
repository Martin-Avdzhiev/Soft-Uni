import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentCryptoComponent } from './current-crypto/current-crypto.component';


const routes: Routes = [{
    path: 'cryptos/:cryptoId',
    component: CurrentCryptoComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CryptoRoutingModule { }
