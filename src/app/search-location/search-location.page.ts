import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-search-location',
  templateUrl: './search-location.page.html',
  styleUrls: ['./search-location.page.scss'],
})
export class SearchLocationPage {
  city: string = '';
  weatherData: any = null;

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    if (this.city.trim() === '') {
      return;
    }

    this.weatherService.searchWeatherByCity(this.city).subscribe(
      (data) => {
        this.weatherData = data;
      },
      (error) => {
        console.error('Erro ao buscar clima da cidade:', error);
      }
    );
  }
}

