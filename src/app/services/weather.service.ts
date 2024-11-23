import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '7147181076deb61e524bf3b4b734f616'; 
  private baseUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) {}

  getWeatherData(lat: number, lon: number): Observable<any> {
    const url = `${this.baseUrl}?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${this.apiKey}`;
    return this.http.get(url);
  }

  searchWeatherByCity(city: string): Observable<any> {
    const url = `${this.baseUrl}?q=${city}&units=metric&lang=pt_br&appid=${this.apiKey}`;
    return this.http.get(url);
  }
}

