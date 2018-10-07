import { Component, OnInit } from '@angular/core';
import {FilmService} from '../../shared/services/film.service';
import {FilmModel} from '../../shared/models/film.model';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.scss']
})
export class FilmListComponent implements OnInit {

  filmData: FilmModel[];

  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.filmService.findAll().subscribe((filmData: FilmModel[]) => {
      this.filmData = filmData;
    });
  }

}
