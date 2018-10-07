import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilmService} from './services/film.service';
import {ApiService} from './services/api.service';
import {HttpClientModule} from '@angular/common/http';
import {BsDropdownModule} from 'ngx-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BsDropdownModule.forRoot()
  ],
  declarations: [
  ],
  providers: [
    FilmService,
    ApiService
  ]
})
export class SharedModule { }
