import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { results } from '../search/cities/model/city';
import { currentCondition } from './model/currentCondition';
import { dailyForecast } from './model/dailyForecast';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  cityObj!: results;
  currentCondition!: currentCondition;
  dailyForecast!: dailyForecast;

  constructor(private service: WeatherService) {}

  searchCurrentCondition(city: results) {
    let locale = `${city.position.lat},${city.position.lon}`;
    return this.service.searchCurrencyCondition(locale).subscribe((res) => {
      this.currentCondition = res;
      this.cityObj = city;
      this.service
        .searchDailyForecast(locale)
        .subscribe((daily) => (this.dailyForecast = daily));
    });
  }
}
