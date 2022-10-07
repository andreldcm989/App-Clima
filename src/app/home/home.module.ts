import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchModule } from '../search/search.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, SearchModule],
})
export class HomeModule {}
