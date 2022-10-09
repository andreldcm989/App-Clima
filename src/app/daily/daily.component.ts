import { Component, Input, OnInit } from '@angular/core';
import { dailyForecast } from '../weather/model/dailyForecast';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css'],
})
export class DailyComponent {
  @Input() dailyForecast!: dailyForecast;
  panelOpenState: boolean = false;
  mouseOver: boolean = false;

  onMouseOverOut() {
    this.mouseOver = !this.mouseOver;
  }
}
