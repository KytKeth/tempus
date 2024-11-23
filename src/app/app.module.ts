import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { RouteReuseStrategy } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

import { environment } from '../environments/environment';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { WeatherService } from './services/weather.service';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebaseConfig), AngularFireAuthModule,HttpClientModule],
  providers: [Geolocation, WeatherService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
