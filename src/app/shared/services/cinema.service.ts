import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {CinemaModel} from '../models/cinema.model';

@Injectable({
  providedIn: 'root'
})
export class CinemaService extends ApiService<CinemaModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'cinemas/');
  }
}
