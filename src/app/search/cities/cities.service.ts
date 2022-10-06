import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from './model/city';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  private readonly API: string =
    'http://dataservice.accuweather.com/locations/v1/cities/search';

  private apikey = 'LNv8cNMgjuNK23TAr0dhyQn7ZeKwFLMt';

  constructor(private http: HttpClient) {}

  searchCity(cityName: string): Observable<City[]> {
    let params = new HttpParams();
    params = params.set('apikey', this.apikey);
    params = params.set('q', cityName);
    return this.http.get<City[]>(this.API, { params });
  }
}
