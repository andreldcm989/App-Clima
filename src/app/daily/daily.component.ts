import { Component, Input, OnInit } from '@angular/core';
import { dailyForecast } from '../weather/model/dailyForecast';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css'],
})
export class DailyComponent implements OnInit {
  @Input() dailyForecast!: dailyForecast;

  constructor() {}

  ngOnInit(): void {}
}
