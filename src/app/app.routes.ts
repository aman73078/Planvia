import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FeatureRoutes } from './features/features.route';
import { HomeComponent } from './features/pages/home/home.component';
import { DetailsComponent } from './features/pages/details/details.component';

export const routes: Routes = [
    {path:'', redirectTo:'dashboard',pathMatch:'full'},
    {
        path:'details', component: DetailsComponent,
    },
    {
        path:'dashboard',
        component: LayoutComponent,
        children: FeatureRoutes
    }
];
