import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Mikaza | Página principal',
  },
  {
    path: 'details/:id',
    component: DetailsComponent,
    title: 'Mikaza | Detalles del inmueble',
  },
];

export default routeConfig;

