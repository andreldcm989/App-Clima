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

  constructor(private citiesService: CitiesService) {
    this.findSavedCities();
  }

  searchCity() {
    return this.citiesService.searchCity(this.cityName).subscribe((res) => {
      this.cities = res.results;
    });
  }

  findSavedCities() {
    let cities = localStorage.getItem('tbFavoritesCities');
    if (!cities) {
      this.savedCities = [];
    } else {
      this.savedCities = JSON.parse(cities);
    }
    return this.savedCities;
  }

  addCityOnSavedCities(index: number): void {
    let city = this.cities[index];
    this.savedCities = this.findSavedCities();
    let tem = this.savedCities.filter((res) => res.id == city.id);
    if (tem.length > 0) {
      alert('Esta cidade já existe nos favoritos.');
      return;
    }
    this.savedCities.push(city);
    localStorage.setItem('tbFavoritesCities', JSON.stringify(this.savedCities));
    alert('Cidade adicionada aos favoritos!');
  }

  removeCityOnSavedCities(index: number): void {
    this.savedCities.splice(index, 1);
    localStorage.setItem('tbFavoritesCities', JSON.stringify(this.savedCities));
  }

  clearListCities(): void {
    this.cityName.length < 3 ? (this.cities = []) : null;
  }

  selectedCity(index: number) {
    this.cities = this.cities.filter(
      (city) => this.cities.indexOf(city) == index
    );
  }
}
