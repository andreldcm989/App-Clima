import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';
import { SearchRoutingModule } from './search-routing.module';
import { WeatherComponent } from '../weather/weather.component';
import { DailyComponent } from '../daily/daily.component';

@NgModule({
  declarations: [CitiesComponent, WeatherComponent, DailyComponent],
  imports: [CommonModule, SearchRoutingModule, FormsModule],
  providers: [],
  exports: [CitiesComponent],
})
export class SearchModule {}
