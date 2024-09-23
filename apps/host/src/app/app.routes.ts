import { NxWelcomeComponent } from './nx-welcome.component';
import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'about',
    loadChildren: () =>
      loadRemoteModule('about', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cart',
    loadChildren: () =>
      loadRemoteModule('cart', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'shop',
    loadChildren: () =>
      loadRemoteModule('shop', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: '',
    component: NxWelcomeComponent,
  },
];
