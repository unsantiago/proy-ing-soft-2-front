import { Routes } from '@angular/router';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDetailComponent } from './house-detail/house-detail.component';

export const HOUSES_ROUTES: Routes = [
    { path: '', component: HouseListComponent },
    { path: ':slug', component: HouseDetailComponent }
];