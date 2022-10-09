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
  pngIcon = [3, 4];
  svgIcon = [2];

  constructor(private service: WeatherService) {}

  searchCurrentCondition(city: results) {
    let locale = `${city.position.lat},${city.position.lon}`;
    return this.service.searchCurrencyCondition(locale).subscribe((res) => {
      this.currentCondition = res;
      this.cityObj = city;
      if (this.pngIcon.includes(this.currentCondition.results[0].iconCode)) {
        this.srcIcon = `../../assets/icons/${this.currentCondition.results[0].iconCode}.png`;
      } else if (
        this.svgIcon.includes(this.currentCondition.results[0].iconCode)
      ) {
        this.srcIcon = `../../assets/icons/${this.currentCondition.results[0].iconCode}.svg`;
      } else {
        this.srcIcon = `../../assets/icons/${this.currentCondition.results[0].iconCode}.gif`;
      }
      this.service
        .searchDailyForecast(locale)
        .subscribe((daily) => (this.dailyForecast = daily));
    });
  }
}
