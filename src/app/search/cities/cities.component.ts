import { Component } from '@angular/core';
import { City } from './model/city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css'],
})
export class CitiesComponent {
  cities: City[] = [
    {
      version: 1,
      key: '1-33809_1_AL',
      type: 'City',
      rank: 35,
      localizedName: 'Uberlandia',
      englishName: 'Uberlândia',
      primaryPostalCode: '',
      region: {
        id: 'SAM',
        localizedName: 'South America',
        englishName: 'South America',
      },
      country: {
        id: 'BR',
        localizedName: 'Brazil',
        englishName: 'Brazil',
      },
      administrativeArea: {
        id: 'MG',
        localizedName: 'Minas Gerais',
        englishName: 'Minas Gerais',
        level: 1,
        localizedType: 'State',
        englishType: 'State',
        countryID: 'BR',
      },
      timeZone: {
        code: 'BRT',
        name: 'America/Sao_Paulo',
        gmtOffset: -3.0,
        isDaylightSaving: false,
        nextOffsetChange: null,
      },
      geoPosition: {
        latitude: -18.919,
        longitude: -48.278,
        elevation: {
          metric: {
            value: 690.0,
            unit: 'm',
            unitType: 5,
          },
          imperial: {
            value: 2263.0,
            unit: 'ft',
            unitType: 0,
          },
        },
      },
      isAlias: true,
      parentCity: {
        key: '33809',
        localizedName: 'Uberlândia',
        englishName: 'Uberlândia',
      },
      supplementalAdminAreas: [
        {
          level: 2,
          localizedName: 'Uberlândia',
          englishName: 'Uberlândia',
        },
        {
          level: 3,
          localizedName: 'Uberlândia',
          englishName: 'Uberlândia',
        },
      ],
      dataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'FutureRadar',
        'MinuteCast',
        'Radar',
      ],
    },
  ];
  constructor() {}
}
