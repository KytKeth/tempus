import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private apiKey = '7147181076deb61e524bf3b4b734f616';
  private apiUrl = 'https://api.openweathermap.org/data/2.5/onecall';

  constructor(private http: HttpClient) {}

  getWeather(lat: number, lon: number): Observable<any> {
    return this.http
      .get(`${this.apiUrl}?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${this.apiKey}`)
      .pipe(
        map((data: any) => {
          const currentWeather = {
            temp: data.current.temp,
            description: data.current.weather[0].description,
            humidity: data.current.humidity,
            uvIndex: data.current.uvi,
            icon: data.current.weather[0].icon,
          };

          const dailyForecast = data.daily.slice(0, 5).map((day: any, index: number) => ({
            day: this.getWeekday(index),
            temp: day.temp.day,
            description: day.weather[0].description,
            icon: day.weather[0].icon,
          }));

          return { currentWeather, dailyForecast };
        })
      );
  }

  private getWeekday(index: number): string {
    const days = ['dom.', 'seg.', 'ter.', 'qua.', 'qui.', 'sex.', 'sáb.'];
    const today = new Date().getDay();
    return days[(today + index - 1) % 7]; 
  }
  searchWeatherByCity(city: string): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt_br&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }

  getWeatherByCity(city: string) {
    return this.http.get(`${this.apiUrl}/weather?q=${city}&units=metric&lang=pt_br&appid=${this.apiKey}`);
  }


  getWeatherByCoords(lat: number, lon: number): Observable<any> {
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}

