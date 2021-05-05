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
  constructor(private wService: WeatherService, private router: Router) {}
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
  temperature = 0;
  weatherData: {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    avgtemp_c: number;
    daily_chance_of_rain: string;
    daily_chance_of_snow: string;
    maxtemp_c: number;
    maxwind_kph: number;
    mintemp_c: number;
  }[] = [];

  ngOnInit() {
    this.name = this.wService.username;
    this.wService.getWeatherData(this.cityName).subscribe((data) => {
      console.log('apii', data);
      this.data = data;
      this.weatherData.splice(0, this.weatherData.length);
      this.setWeatherData(data);
    });
  }

  search(name: HTMLInputElement) {
    this.cityName = name.value;
    this.wService.getWeatherData(this.cityName).subscribe((data) => {
      console.log('apii', data);
      this.data = data;
      this.weatherData.splice(0, this.weatherData.length);
      this.setWeatherData(data);
    });
  }
  setWeatherData(data: any) {
    this.today = data.forecast.forecastday[0].date;
    this.tomorrow = data.forecast.forecastday[1].date;
    this.dayafter = data.forecast.forecastday[2].date;
    this.temperature = data.current.temp_c;
    for (let i = 0; i < 3; i++) {
      this.weatherData.push({
        sunrise: data.forecast.forecastday[i].astro.sunrise,
        sunset: data.forecast.forecastday[i].astro.sunset,
        moonrise: data.forecast.forecastday[i].astro.moonrise,
        moonset: data.forecast.forecastday[i].astro.moonset,
        avgtemp_c: data.forecast.forecastday[i].day.avgtemp_c,
        daily_chance_of_rain:
          data.forecast.forecastday[i].day.daily_chance_of_rain,
        daily_chance_of_snow:
          data.forecast.forecastday[i].day.daily_chance_of_snow,
        maxtemp_c: data.forecast.forecastday[i].day.maxtemp_c,
        maxwind_kph: data.forecast.forecastday[i].day.maxwind_kph,
        mintemp_c: data.forecast.forecastday[i].day.mintemp_c,
      });
    }

    console.log(this.weatherData);
  }
}
