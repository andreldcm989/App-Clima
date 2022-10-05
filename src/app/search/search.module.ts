import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from './search-routing.module';
import { CitiesComponent } from './cities/cities.component';

@NgModule({
  declarations: [CitiesComponent],
  imports: [CommonModule, SearchRoutingModule],
})
export class SearchModule {}
