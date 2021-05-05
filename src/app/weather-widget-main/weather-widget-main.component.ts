import { HttpClient, HttpParams } from '@angular/common/http';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.scss'],
})
export class WeatherWidgetMainComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private wService: WeatherService,
    private router: Router
  ) {}
  @ViewChild('city') city: ElementRef;
  isDrop = false;
  cityName = 'Coimbatore';
  data = null;
  toggle(num: number) {
    this.isDrop = !this.isDrop;
    if (num == 1) {
      this.router.navigate(['/']);
    }
  }
  name = '';
  dayafter = null;
  today = null;
  tomorrow = null;
  ngOnInit() {
    this.name = this.wService.username;
    this.wService.getWeatherData(this.cityName).subscribe((data) => {
      console.log('apii', data);
      this.data = data;
      console.log(data.forecast.forecastday[0].date);
      this.today = data.forecast.forecastday[0].date;
      this.tomorrow = data.forecast.forecastday[1].date;
      this.dayafter = data.forecast.forecastday[2].date;
    });
  }

  search(name: HTMLInputElement) {
    this.cityName = name.value;
    this.wService.getWeatherData(this.cityName).subscribe((data) => {
      console.log('apii', data);
      this.data = data;
    });
  }
}
