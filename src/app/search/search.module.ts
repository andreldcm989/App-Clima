import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';
import { SearchRoutingModule } from './search-routing.module';
import { WeatherComponent } from '../weather/weather.component';

@NgModule({
  declarations: [CitiesComponent, WeatherComponent],
  imports: [CommonModule, SearchRoutingModule, FormsModule],
  providers: [],
  exports: [CitiesComponent],
})
export class SearchModule {}
