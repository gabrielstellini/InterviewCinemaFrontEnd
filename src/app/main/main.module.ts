import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {MainRoutes} from './MainRoutes.routes';
import {FilmListComponent} from './film-list/film-list.component';
import { FilmItemComponent } from './film-list/film-item/film-item.component';
import { BookingFormComponent } from './booking-form/booking-form.component';
import {BsDropdownModule} from 'ngx-bootstrap';
import {FormsModule} from '@angular/forms';
import {SeatSelectComponent} from './booking-form/seat-select/seat-select.component';
import { CompleteBookingComponent } from './booking-form/complete-booking/complete-booking.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(MainRoutes),
    BsDropdownModule,
    FormsModule
  ],
  declarations: [
    HomeComponent,
    FilmListComponent,
    FilmItemComponent,
    BookingFormComponent,
    SeatSelectComponent,
    CompleteBookingComponent
  ]
})
export class MainModule { }
