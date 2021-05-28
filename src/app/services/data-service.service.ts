import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements OnInit {
  username = new BehaviorSubject<string>(null);
  apiKey = 'edc1bd27ced542688eb40900210405';
  url = 'https://api.weatherapi.com/v1/forecast.json?';
  name = null;
  constructor(private http: HttpClient) {}
  ngOnInit() {}
  getUsername() {
    this.username.subscribe((name) => {
      this.name = name;
    });
    return this.name;
  }
  getWeatherData(city: string): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', city)
      .set('days', '3');

    return this.http.get(this.url, { params });
  }
}
