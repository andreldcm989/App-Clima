import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { CitiesService } from './cities.service';
import { City, results } from './model/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  cities: results[] = [];
  savedCities: results[] = [];
  cityName = '';

  constructor(private citiesService: CitiesService) {}

  searchCity() {
    return this.citiesService.searchCity(this.cityName).subscribe((res) => {
      this.cities = res.results;
    });
  }

  addCityOnSavedCities(index: number): void {
    let city = this.cities[index];
    this.savedCities.push(city);
    localStorage.setItem('tbFavoritesCities', JSON.stringify(this.savedCities));
    alert('Registro salvo com sucesso!');
  }

  removeCityOnSavedCities(index: number): void {
    let cities = localStorage.getItem('tbFavoriteCities');
    if (cities == null) {
      this.savedCities = [];
    } else {
      this.savedCities = JSON.parse(cities);
    }
  }

  clearListCities(): void {
    this.cityName.length < 3 ? (this.cities = []) : null;
  }
}
