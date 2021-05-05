import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService implements OnInit {
  username: string;
  apiKey = 'edc1bd27ced542688eb40900210405';
  url = 'https://api.weatherapi.com/v1/forecast.json?';

  constructor(private http: HttpClient) {}
  ngOnInit() {}
  getUsername(name) {
    this.username = name;
  }
  getWeatherData(city: string): Observable<any> {
    const params = new HttpParams()
      .set('key', this.apiKey)
      .set('q', city)
      .set('days', '3');

    return this.http.get(this.url, { params });
  }
}
