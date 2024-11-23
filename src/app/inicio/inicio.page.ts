import { Component } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { WeatherService } from '../services/weather.service'; 

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  weatherData: any = null; 
  isLoading: boolean = false; 

  constructor(private weatherService: WeatherService) {}

  async getWeather() {
    this.isLoading = true; 
    try {
      
      const position = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = position.coords;

      // Buscar dados do clima
      this.weatherService.getWeatherData(latitude, longitude).subscribe(
        (data) => {
          this.weatherData = data;
          this.isLoading = false; 
        },
        (error) => {
          console.error('Erro ao buscar dados do clima:', error);
          this.isLoading = false; 
        }
      );
    } catch (error) {
      console.error('Erro ao obter localização:', error);
      this.isLoading = false;
    }
  }
}






