import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import localePT from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePT);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, SearchModule, HttpClientModule],
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
