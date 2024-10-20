import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  weather: any;

  constructor() {}

  async getWeather() {
    const apiKey = '7147181076deb61e524bf3b4b734f616'; // Substitua pela sua chave da API
    const city = 'Rio de Janeiro'; // Substitua pela cidade desejada
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      this.weather = response.data;
    } catch (error) {
      console.error('Erro ao obter os dados:', error);
    }
  }

  ngOnInit() {
    this.getWeather();
  }
}

