import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {BookingFormComponent} from './booking-form/booking-form.component';
import {FilmListComponent} from './film-list/film-list.component';
import {CompleteBookingComponent} from './booking-form/complete-booking/complete-booking.component';

export const MainRoutes: Routes = [
  {
    path: 'films', component: HomeComponent, children: [
      {path: '', component: FilmListComponent},
      {path: ':filmId/bookings/:seatId/complete-booking', component: CompleteBookingComponent},
      {path: ':filmId/bookings', component: BookingFormComponent},
      {path: '**', redirectTo: '/films', pathMatch: 'full'}
    ]
  },
  {path: '**', redirectTo: '/films', pathMatch: 'full'}
];
