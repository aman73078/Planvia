import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { FeatureRoutes } from './features/features.route';

export const routes: Routes = [
    {path:'', redirectTo:'dashboard',pathMatch:'full'},
    {
        path:'dashboard',
        component: LayoutComponent,
        children: FeatureRoutes
    }
];
