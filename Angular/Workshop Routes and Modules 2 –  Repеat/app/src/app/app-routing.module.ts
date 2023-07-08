import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [{
path: '',
pathMatch: 'full',
redirectTo: 'home'
},
  {
  path: 'themes',
  component: MainComponent
},
{
  path: 'home',
  component: WelcomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
