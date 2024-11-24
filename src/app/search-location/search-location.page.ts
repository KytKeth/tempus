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
  errorMessage: string = '';

  constructor(private weatherService: WeatherService) {}

  searchWeather() {
    if (!this.city) {
      this.errorMessage = 'Por favor, insira o nome de uma cidade.';
      return;
    }

    this.weatherService.searchWeatherByCity(this.city).subscribe(
      (data: any) => {
        this.weatherData = {
          name: data.name,
          temp: data.main.temp,
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        };
        this.errorMessage = '';
      },
      (error) => {
        console.error('Erro ao buscar dados da API:', error);
        if (error.status === 404) {
          this.errorMessage = 'Cidade não encontrada. Verifique o nome.';
        } else {
          this.errorMessage = 'Erro ao buscar dados. Tente novamente mais tarde.';
        }
      }
    );
  }
}


