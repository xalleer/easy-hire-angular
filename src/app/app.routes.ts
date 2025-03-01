import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      {
        path: 'welcome',
        loadComponent: () => import('./auth/welcome/welcome.component').then((m) => m.WelcomeComponent),
      },
      {
        path: 'login',
        loadComponent: () => import('./auth/login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'register',
        loadComponent: () => import('./auth/register/register.component').then((m) => m.RegisterComponent),
      },
    ],
  },
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
];
