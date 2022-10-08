import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { currentCondition } from './model/currentCondition';
import { dailyForecast } from './model/dailyForecast';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly API: string = 'https://atlas.microsoft.com/weather';
  private readonly apikey = '80vem-LLKBErfO7LtMcahgOw-H1I8hZLfzRCcCFV_3c';

  constructor(private http: HttpClient) {}

  searchCurrencyCondition(location: string): Observable<currentCondition> {
    let params = new HttpParams();
    params = params.set('subscription-key', this.apikey);
    params = params.set('query', location.toString());
    return this.http.get<currentCondition>(
      `${this.API}/currentConditions/json?api-version=1.0&language=pt-BR&`,
      { params }
    );
  }

  searchDailyForecast(location: string) {
    let params = new HttpParams();
    params = params.set('subscription-key', this.apikey);
    params = params.set('query', location.toString());
    return this.http.get<dailyForecast>(
      `${this.API}/forecast/daily/json?api-version=1.1&language=pt-BR&duration=5`,
      { params }
    );
  }
}
