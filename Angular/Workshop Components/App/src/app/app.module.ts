import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { ThemeListComponent } from './theme/theme-list/theme-list.component';
import { RecentPostsComponent } from './theme/recent-posts/recent-posts.component';
import { HttpClientModule } from '@angular/common/http';
import { MainComponent } from './theme/main/main.component';
import { SharedModule } from './shared/shared.module';
import { AuthRoutingModule } from './auth/auth-routing-module';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { ThemeModule } from './theme/theme.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AuthModule,
    ThemeModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SharedModule,
    AuthRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
