import { Routes } from '@angular/router';
import { loggedGuard } from './core/guards/logged.guard';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth/auth.routes').then(m => m.AUTH_ROUTES),
        canActivate: [loggedGuard]
    },
    {
        path: 'houses',
        loadChildren: () => import('./houses/houses.routes').then(m => m.HOUSES_ROUTES)
    },
    {
        path: 'dashboard',
        loadChildren: () => import('./admin/admin.routes').then(m => m.ADMIN_ROUTES)
    }
];