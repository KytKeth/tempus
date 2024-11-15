import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  getWeatherData() {
    throw new Error('Method not implemented.');
  }
  fetchWeatherData(): any {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private apiKey = '7147181076deb61e524bf3b4b734f616';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<any> {
    const url = `${this.apiUrl}?q=${city}&appid=${this.apiKey}&units=metric&lang=pt_br`;
    return this.http.get(url);
  }
}
