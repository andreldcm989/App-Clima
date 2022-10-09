import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { DailyModule } from './daily/daily.module';

@NgModule({
  declarations: [WeatherComponent],
  imports: [CommonModule, WeatherRoutingModule, DailyModule],
  exports: [WeatherComponent, DailyModule],
})
export class WeatherModule {}
