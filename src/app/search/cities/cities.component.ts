import { Component } from '@angular/core';
import { CitiesService } from './cities.service';
import { results } from './model/city';

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

  findCities() {
    let cities = localStorage.getItem('tbFavoritesCities');
    if (!cities) {
      this.savedCities = [];
    } else {
      this.savedCities = JSON.parse(cities);
    }
  }

  addCityOnSavedCities(index: number): void {
    let city = this.cities[index];
    this.savedCities.push(city);
    localStorage.setItem('tbFavoritesCities', JSON.stringify(this.savedCities));
    alert('Registro salvo com sucesso!');
  }

  removeCityOnSavedCities(index: number): void {
    this.savedCities.splice(index, 1);
    localStorage.setItem('tbFavoritesCities', JSON.stringify(this.savedCities));
  }

  clearListCities(): void {
    this.cityName.length < 3 ? (this.cities = []) : null;
  }
}
