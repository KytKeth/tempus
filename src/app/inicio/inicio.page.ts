import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
    weather: any;
  
    constructor() {}
  
    async getWeather() {
      const apiKey = '7147181076deb61e524bf3b4b734f616';
      const city = 'Rio de Janeiro';
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=pt_br`);
        this.weather = response.data;
      } catch (error) {
        console.error('Erro ao obter os dados:', error);
      }
    }
  
    ngOnInit() {
      this.getWeather();
    }
  }
