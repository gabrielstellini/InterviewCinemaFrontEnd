import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {BookingModel} from '../models/booking.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService extends ApiService<BookingModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'bookings/');
  }
}
