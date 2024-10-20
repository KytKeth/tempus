import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey = '7147181076deb61e524bf3b4b734f616'; 
  private weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  private forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(private http: HttpClient) { }

  // Método para buscar o clima atual de uma cidade
  getCurrentWeather(city: string): Observable<any> {
    return this.http.get(`${this.weatherUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }

  // Método para buscar a previsão do clima nos próximos 5 dias
  getWeatherForecast(city: string): Observable<any> {
    return this.http.get(`${this.forecastUrl}?q=${city}&appid=${this.apiKey}&units=metric`);
  }
}

