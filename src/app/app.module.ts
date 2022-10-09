import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesService } from './search/cities/cities.service';
import { SearchModule } from './search/search.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchModule, HttpClientModule],
  providers: [CitiesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
