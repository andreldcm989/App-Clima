import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CitiesComponent } from './cities/cities.component';
import { SearchRoutingModule } from './search-routing.module';

@NgModule({
  declarations: [CitiesComponent],
  imports: [CommonModule, SearchRoutingModule, FormsModule],
  providers: [],
})
export class SearchModule {}
