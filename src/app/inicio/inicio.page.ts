import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  weather: any;

  constructor(private weatherService: WeatherService, private router: Router) {}

  ngOnInit() {
    this.getWeather();
  }

  async getWeather() {
    try {
      this.weather = await this.weatherService.fetchWeatherData();
    } catch (error) {
      console.error('Erro ao obter dados do clima:', error);
    }
  }
}







// import { Component, OnInit } from '@angular/core';
// import { WeatherService } from '../services/weather.service';

// @Component({
//   selector: 'app-inicio',
//   templateUrl: './inicio.page.html',
//   styleUrls: ['./inicio.page.scss'],
// })
// export class InicioPage implements OnInit {
//   weather: any;

//   constructor(private weatherService: WeatherService) {}

//   ngOnInit() {
//     this.getWeather();
//   }

//   getWeather() {
//     const city = 'Rio de Janeiro';
//     this.weatherService.getWeather(city).subscribe(
//       (data) => {
//         this.weather = data;
//       },
//       (error) => {
//         console.error('Erro ao obter dados de clima', error);
//       }
//     );
//   }
// }

