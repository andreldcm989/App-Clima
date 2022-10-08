import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { currentCondition } from './model/currentCondition';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly API: string =
    'https://atlas.microsoft.com/weather/currentConditions/json?api-version=1.0&language=pt-BR&';
  private readonly apikey = '80vem-LLKBErfO7LtMcahgOw-H1I8hZLfzRCcCFV_3c';

  constructor(private http: HttpClient) {}

  searchCurrencyCondition(location: string): Observable<currentCondition> {
    let params = new HttpParams();
    params = params.set('subscription-key', this.apikey);
    params = params.set('query', location.toString());
    return this.http.get<currentCondition>(this.API, { params });
  }
}
