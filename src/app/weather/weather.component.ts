import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  constructor(private service: WeatherService) {
    let locale = '-18.90971,-48.26192';
    this.service.getCurrencyCondition(locale);
  }

  ngOnInit(): void {}
}
