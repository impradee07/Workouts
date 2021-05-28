import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';

import { Router } from '@angular/router';

import { WeatherService } from '../services/data-service.service';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  constructor(private wService: WeatherService, private router: Router) {}
  @ViewChild('city') city: ElementRef;
  isDrop = false;
  cityName = 'Coimbatore';
  data = null;

  name = '';

  temperature = 0;
  days = {
    0: '',
    1: '',
    2: '',
  };
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
    text: string;
    icon: string;
  }[] = [];
  location: string;
  ngOnInit() {
    this.name = JSON.parse(localStorage.getItem('UserData'))['name'];
    console.log(this.name);

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
      this.data = data;
      this.weatherData.splice(0, this.weatherData.length);
      this.setWeatherData(data);
    });
  }
  setWeatherData(data: any) {
    this.location = data.location.region + ', ' + data.location.country;

    this.days[0] = 'Today ' + data.forecast.forecastday[0].date;
    this.days[1] = 'Tomorrow ' + data.forecast.forecastday[1].date;
    this.days[2] = 'Day After Tomorrow ' + data.forecast.forecastday[2].date;
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
        text: data.forecast.forecastday[i].day.condition.text,
        icon: data.forecast.forecastday[i].day.condition.icon,
      });
    }

    console.log(this.weatherData);
  }
}
