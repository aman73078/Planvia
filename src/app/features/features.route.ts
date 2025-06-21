import { Routes } from "@angular/router";

export const FeatureRoutes: Routes = [
    {
        path:'', redirectTo:'home', pathMatch:'full',
    },
    {
        path:'home',
        loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    },
    {
        path:'projects',
        loadComponent: () => import('./components/projects/projects.component').then(m => m.ProjectsComponent),
    },
    {
        path:'task',
        loadComponent: () => import('./components/task/task.component').then(m => m.TaskComponent),
    }
]