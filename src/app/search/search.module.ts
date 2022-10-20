import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';
import { SearchRoutingModule } from './search-routing.module';
import { WeatherModule } from '../weather/weather.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [CitiesComponent],
  imports: [
    CommonModule,
    SearchRoutingModule,
    FormsModule,
    WeatherModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  exports: [CitiesComponent],
})
export class SearchModule {}
