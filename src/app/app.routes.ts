import { Routes } from '@angular/router';
import {WelcomeComponent} from "./pages/auth/welcome/welcome.component";
import {LoginComponent} from "./pages/auth/login/login.component";
import {RegisterComponent} from "./pages/auth/register/register.component";
import {ProfileComponent} from "./pages/main/profile/profile.component";

export const routes: Routes = [
  {
    path: 'auth',
    redirectTo: 'auth/login',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'welcome', component: WelcomeComponent },
    ]
  },

  {
    path: '',
    redirectTo: 'profile',
    pathMatch: 'full',
  },

  {
    path: 'profile',
    component: ProfileComponent
  },

  {
    path: '',
    redirectTo: 'auth/register',
    pathMatch: 'full',
  },
];
