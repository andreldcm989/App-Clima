import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { results } from '../search/cities/model/city';
import { currentCondition } from './model/currentCondition';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent {
  @Input() cityObj!: results;
  @Output() weather = new EventEmitter();
  currentCondition!: currentCondition;

  constructor(private service: WeatherService) {}

  searchCurrentCondition() {
    let locale = `${this.cityObj.position.lat},${this.cityObj.position.lon}`;
    console.log(this.cityObj);
    this.service.searchCurrencyCondition(locale).subscribe((res) => {
      this.currentCondition = res;
      console.log(this.currentCondition);
    });
  }
}
