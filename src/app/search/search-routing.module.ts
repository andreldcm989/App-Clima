import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherModule } from '../weather/weather.module';
import { CitiesComponent } from './cities/cities.component';

const routes: Routes = [
  {
    path: 'current',
    loadChildren: () =>
      import('../weather/weather.module').then((m) => WeatherModule),
  },
  { path: 'search', component: CitiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchRoutingModule {}
