import { Routes } from '@angular/router';

// generic routes which redirect the users to the correct URL
export const AppRoutes: Routes = [
  { path: '**', redirectTo: '/home', pathMatch: 'full'}
];
