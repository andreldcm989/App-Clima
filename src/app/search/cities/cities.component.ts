import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

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

  constructor(private citiesService: CitiesService, private dialog: MatDialog) {
    this.findSavedCities();
  }

  searchCity() {
    if (this.cityName == '') {
      this.dialog.open(InputEmptyDialogComponent);
      return;
    }
    return this.citiesService.searchCity(this.cityName).subscribe((res) => {
      this.cities = res.results;
      if (this.cities.length === 0) {
        this.dialog.open(CityNotFoundDialogComponent);
      }
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
      this.dialog.open(CityExistsOnFavComponent);
      return;
    }
    this.savedCities.push(city);
    localStorage.setItem('tbFavoritesCities', JSON.stringify(this.savedCities));
    this.dialog.open(CityAddOnFavComponent);
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

@Component({
  template: `<h2 mat-dialog-title>Busca não realizada!</h2>
    <div mat-dialog-content>
      <p>O campo de busca não pode ser vazio!</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Ok</button>
    </div>`,
  styles: [
    `
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 20px;
        border: none;
        outline: 0;
        border-radius: 5px;
        background: rgba(143, 199, 238, 0.8);
        color: #000000;
        font-weight: bold;
      }
    `,
  ],
})
export class InputEmptyDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<InputEmptyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  template: `<h2 mat-dialog-title>Nenhuma cidade foi encontrada!</h2>
    <div mat-dialog-content>
      <p>Verifique o nome da cidade e tente novamente.</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Ok</button>
    </div>`,
  styles: [
    `
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 20px;
        border: none;
        outline: 0;
        border-radius: 5px;
        background: rgba(143, 199, 238, 0.8);
        color: #000000;
        font-weight: bold;
      }
    `,
  ],
})
export class CityNotFoundDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<CityNotFoundDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  template: `<div mat-dialog-content>
      <p>Esta cidade já está na lista de favoritos.</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Ok</button>
    </div>`,
  styles: [
    `
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 20px;
        border: none;
        outline: 0;
        border-radius: 5px;
        background: rgba(143, 199, 238, 0.8);
        color: #000000;
        font-weight: bold;
      }
    `,
  ],
})
export class CityExistsOnFavComponent {
  constructor(
    public dialogRef: MatDialogRef<CityExistsOnFavComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

@Component({
  template: `<div mat-dialog-content>
      <p>Cidade adicionada aos favoritos com sucesso!</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">Ok</button>
    </div>`,
  styles: [
    `
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 20px;
        border: none;
        outline: 0;
        border-radius: 5px;
        background: rgba(143, 199, 238, 0.8);
        color: #000000;
        font-weight: bold;
      }
    `,
  ],
})
export class CityAddOnFavComponent {
  constructor(
    public dialogRef: MatDialogRef<CityAddOnFavComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
