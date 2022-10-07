import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { currentCondition } from './model/currentCondition';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private readonly API: string = '';
  private readonly apikey: string =
    '80vem-LLKBErfO7LtMcahgOw-H1I8hZLfzRCcCFV_3c';

  constructor(private http: HttpClient) {}

  getCurrencyCondition(location: string): Observable<currentCondition> {
    let params = new HttpParams();
    params.set('subscription-key', this.apikey);
    params.set('query', location);
    return this.http
      .get<currentCondition>(this.API, { params })
      .pipe(tap((res) => console.log));
  }
}
