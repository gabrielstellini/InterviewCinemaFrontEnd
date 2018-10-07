import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {TheatreModel} from '../models/theatre.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TheatreService extends ApiService<TheatreModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'theatres/');
  }
}
