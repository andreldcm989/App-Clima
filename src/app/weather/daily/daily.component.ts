import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { dailyForecast } from '../model/dailyForecast';

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.css'],
})
export class DailyComponent {
  @Input() dailyForecast!: dailyForecast;
}
