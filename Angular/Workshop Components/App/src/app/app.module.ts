import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from './shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { PostListComponent } from './post-list/post-list.component'
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ThemeListComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
