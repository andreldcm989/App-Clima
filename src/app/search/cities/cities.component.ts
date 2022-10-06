import { Component } from '@angular/core';
import { pipe } from 'rxjs';
import { CitiesService } from './cities.service';
import { City } from './model/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  cities: City[] = [];

  cityName = '';

  constructor(private citiesService: CitiesService) {}

  searchCity() {
    this.citiesService.searchCity(this.cityName).subscribe(console.log);
  }
}
