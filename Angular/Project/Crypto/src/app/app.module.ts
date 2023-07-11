import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { CryptoListComponent } from './crypto/crypto-list/crypto-list.component';
import { MainDescriptionListComponent } from './main-description-list/main-description-list.component';
import { UserModule } from './user/user.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { CryptoModule } from './crypto/crypto.module';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainDescriptionListComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    UserModule,
    HttpClientModule,
    CryptoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
