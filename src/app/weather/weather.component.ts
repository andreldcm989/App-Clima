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
  srcIcon: string = '';
  gifIcon = [1, 6, 8, 11, 12, 13, 15, 18, 22, 16, 32, 33, 38];

  constructor(private service: WeatherService) {}

  searchCurrentCondition(city: results) {
    let locale = `${city.position.lat},${city.position.lon}`;
    return this.service.searchCurrencyCondition(locale).subscribe((res) => {
      this.currentCondition = res;
      this.cityObj = city;
      if (this.gifIcon.includes(this.currentCondition.results[0].iconCode)) {
        this.srcIcon = `../../assets/icons/${this.currentCondition.results[0].iconCode}.gif`;
      } else {
        this.srcIcon = `../../assets/icons/${this.currentCondition.results[0].iconCode}.png`;
      }
      this.service
        .searchDailyForecast(locale)
        .subscribe((daily) => (this.dailyForecast = daily));
    });
  }
}
