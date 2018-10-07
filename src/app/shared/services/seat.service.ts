import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {SeatModel} from '../models/seat.model';

@Injectable({
  providedIn: 'root'
})
export class SeatService extends ApiService<SeatModel> {
  constructor(httpClient: HttpClient) {
    super(httpClient, );
  }

  setUrl(filmId: number, theatreId: number) {
    const resultExtension = 'films/' + filmId + '/theatre/' + theatreId + '/seats';
    this.setApiUrl(resultExtension);
  }

}
