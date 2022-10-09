import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';
import { SearchRoutingModule } from './search-routing.module';
import { WeatherModule } from '../weather/weather.module';

@NgModule({
  declarations: [CitiesComponent],
  imports: [CommonModule, SearchRoutingModule, FormsModule, WeatherModule],
  providers: [],
  exports: [CitiesComponent],
})
export class SearchModule {}
