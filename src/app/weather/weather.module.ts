import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { DailyComponent } from './daily/daily.component';

@NgModule({
  declarations: [WeatherComponent, DailyComponent],
  imports: [CommonModule, WeatherRoutingModule],
  exports: [WeatherComponent, DailyComponent],
})
export class WeatherModule {}
