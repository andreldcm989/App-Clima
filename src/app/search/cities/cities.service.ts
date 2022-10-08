import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './model/city';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private readonly API: string =
    'https://atlas.microsoft.com/search/address/json?&api-version=1.0&language=pt-BR&entityType=Municipality';

  private readonly apikey = '80vem-LLKBErfO7LtMcahgOw-H1I8hZLfzRCcCFV_3c';

  constructor(private http: HttpClient) {}

  searchCity(cityName: string): Observable<City> {
    let params = new HttpParams();
    params = params.set('subscription-key', this.apikey);
    params = params.set('query', cityName);
    console.log(params);
    return this.http.get<City>(this.API, { params });
  }
}
