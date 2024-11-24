import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  weatherData: any = null;
  currentLocation: string = '';
  currentDate: Date = new Date();
  forecast: any[] = [];

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.loadWeather();
  }

  async loadWeather() {
    try {

      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;


      this.weatherService.getWeatherByCoords(lat, lon).subscribe(
        (data: any) => {
          this.processWeatherData(data);
        },
        (error: any) => {
          console.error('Erro ao buscar clima:', error);
        }
      );
    } catch (error) {
      console.error('Erro ao obter localização:', error);
    }
  }

  processWeatherData(data: any) {
    this.weatherData = data;
    this.currentLocation = data.city.name;

    const currentDate = new Date();
    this.forecast = [];

    for (let i = -1; i <= 4; i++) {
      const targetDate = new Date();
      targetDate.setDate(currentDate.getDate() + i);

      const dailyData = data.list.find((item: any) => {
        const itemDate = new Date(item.dt_txt);
        return (
          itemDate.getDate() === targetDate.getDate() &&
          itemDate.getMonth() === targetDate.getMonth()
        );
      });

      if (dailyData) {
        this.forecast = data.list
        .filter((item: any, index: number) => index % 8 === 0) 
        .slice(0, 5) 
        .map((item: any) => ({
          date: new Date(item.dt * 1000),
          temp: item.main.temp,
          description: item.weather[0].description,
          icon: item.weather[0].icon, 
        }));
      };
    }
  }
}





