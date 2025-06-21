import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FeatureRoutes } from './features/features.route';
import { HomeComponent } from './features/pages/home/home.component';
import { DetailsComponent } from './features/pages/details/details.component';
import { AuthComponent } from './features/auth/auth.component';
import { OverviewComponent } from './features/overview/overview.component';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'overview',
    component: OverviewComponent,
    children: [
        {
            path:'details',
            loadComponent: ()=> import('./features/pages/details/details.component').then(m => m.DetailsComponent),
        },
        {
            path:'testinomial',
            loadComponent: ()=> import('./features/pages/testinomial/testinomial.component').then(m => m.TestinomialComponent),
        },
        {
            path: 'auth',
            component: AuthComponent,
        },
    ],
  },

  {
    path: 'dashboard',
    component: LayoutComponent,
    children: FeatureRoutes,
  },
];
