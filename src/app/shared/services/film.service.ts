import { Injectable } from '@angular/core';
import {ApiService} from './api.service';
import {HttpClient} from '@angular/common/http';
import {FilmModel} from '../models/film.model';

@Injectable({
  providedIn: 'root'
})
export class FilmService extends ApiService<FilmModel> {

  constructor(httpClient: HttpClient) {
    super(httpClient, 'films/');
  }
}
