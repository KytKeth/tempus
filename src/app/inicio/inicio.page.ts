import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.getWeather();
  }

  getWeather() {
    const city = 'Rio de Janeiro';
    this.weatherService.getWeather(city).subscribe(
      (data) => {
        this.weather = data;
      },
      (error) => {
        console.error('Erro ao obter dados de clima', error);
      }
    );
  }
}

