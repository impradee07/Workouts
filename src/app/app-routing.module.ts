import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';

const routes: Routes = [
  { path: '', component: LoginFormComponent },
  { path: 'home', component: WeatherWidgetMainComponent },
  { path: '**', component: LoginFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
