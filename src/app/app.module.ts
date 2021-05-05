import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { WeatherWidgetMainComponent } from './weather-widget-main/weather-widget-main.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './slide/carousel/carousel.component';
import { FormsComponent } from './forms/forms.component';
import { TempoFormComponent } from './forms/tempo-form/tempo-form.component';
import { TempFormComponent } from './forms/temp-form/temp-form.component';
import { ActivityHeaderComponent } from './activity/activity-header/activity-header.component';
import { ActivityIngredientsComponent } from './activity/activity-ingredients/activity-ingredients.component';
import { ActivityPizzaBuilderComponent } from './activity/activity-pizza-builder/activity-pizza-builder.component';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    LoginFormComponent,
    CarouselComponent,
    FormsComponent,
    TempoFormComponent,
    TempFormComponent,
    ActivityHeaderComponent,
    ActivityIngredientsComponent,
    ActivityPizzaBuilderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
