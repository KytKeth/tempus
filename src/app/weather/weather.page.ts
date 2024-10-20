import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage {
  city: string = '';  // Cidade pesquisada
  currentWeather: any;  // Dados do clima atual
  weatherForecast: any; // Previsão para os próximos 5 dias

  constructor(private weatherService: WeatherService) {}

  // Método para buscar os dados de clima
  searchWeather() {
    if (this.city.trim()) {
      // Buscar o clima atual
      this.weatherService.getCurrentWeather(this.city).subscribe(data => {
        this.currentWeather = data;
      });

      // Buscar a previsão de 5 dias
      this.weatherService.getWeatherForecast(this.city).subscribe(data => {
        this.weatherForecast = data.list.filter((_forecast: any, index: number) => index % 8 === 0); // Filtro para pegar uma previsão por dia
      });
    }
  }
}

