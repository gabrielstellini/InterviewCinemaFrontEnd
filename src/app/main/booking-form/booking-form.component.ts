import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {flatMap, map} from 'rxjs/operators';
import {FilmService} from '../../shared/services/film.service';
import {SeatService} from '../../shared/services/seat.service';
import {SeatModel} from '../../shared/models/seat.model';
import {CinemaService} from '../../shared/services/cinema.service';
import {TheatreService} from '../../shared/services/theatre.service';
import {TheatreModel} from '../../shared/models/theatre.model';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent implements OnInit {

  selectedVenue = null;
  seatsData: SeatModel[] = [];
  theatres: TheatreModel[] = [];
  theatreIds: number[];
  filmId: number;

  constructor(private activatedRoute: ActivatedRoute,
              private filmService: FilmService,
              private cinemaService: CinemaService,
              private seatService: SeatService,
              private theatreService: TheatreService) {
  }

  ngOnInit() {
    this.activatedRoute.url.pipe(
      map(data => data[0].path),
      // get theatres a film is shown in
      flatMap((filmId) => {
        this.filmId = +filmId;
        return this.filmService.find(+filmId);
      }),
      flatMap((filmDetails) => {
        this.theatreIds = filmDetails.theatreIds;
        return filmDetails.theatreIds;
      }),
      // get the cinemas
      flatMap((theatreIds) =>
        this.theatreService.find(theatreIds)
      )
    ).subscribe((theatres) => this.theatres.push(theatres));
  }

  venueChanged() {
    this.refreshSeats();
  }

  refreshSeats() {
    this.seatService.setUrl(this.filmId, this.selectedVenue);
    this.seatService.findAll().subscribe((seats) => this.seatsData = seats);
  }
}
