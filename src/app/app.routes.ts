import { Routes } from '@angular/router';
import { Pages } from '../utils/routes';
import { AuthGuard } from '../guards/auth.guard';
import { RedirectIfAuthenticatedGuard } from '../guards/ redirect-if-authenticated.guard';

export const routes: Routes = [
  {
    path: Pages.Home,
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
    canActivate: [AuthGuard],
  },
  {
    path: Pages.QueryBuilder,
    loadComponent: () =>
      import('./pages/query-builder/query-builder.component').then(
        (c) => c.QueryBuilderComponent,
      ),
    canActivate: [AuthGuard],
  },
  {
    path: Pages.AI,
    loadComponent: () =>
      import('./pages/ai/ai.component').then((c) => c.AIComponent),
    canActivate: [AuthGuard],
  },
  {
    path: Pages.Login,
    loadComponent: () =>
      import('./pages/login/login.component').then((c) => c.LoginComponent),
    canActivate: [RedirectIfAuthenticatedGuard],
  },
  {
    path: Pages.SignUp,
    loadComponent: () =>
      import('./pages/sign-up/sign-up.component').then(
        (c) => c.SignUpComponent,
      ),
    canActivate: [RedirectIfAuthenticatedGuard],
  },
];
