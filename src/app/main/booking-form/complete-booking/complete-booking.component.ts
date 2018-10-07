import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {BookingModel} from '../../../shared/models/booking.model';
import {BookingService} from '../../../shared/services/booking.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-complete-booking',
  templateUrl: './complete-booking.component.html',
  styleUrls: ['./complete-booking.component.scss']
})
export class CompleteBookingComponent implements OnInit {

  public filmId = -1;
  public seatId = -1;

  constructor(activatedRoute: ActivatedRoute,
              private bookingService: BookingService,
              private router: Router,
              private toastr: ToastrService) {

    activatedRoute.url.pipe(
      map(data => data)
    ).subscribe(data => {
      this.filmId = +data[0].path;
      this.seatId = +data[2].path;
    });
  }

  ngOnInit() {
  }

  bookSeat() {
    const booking: BookingModel = {
      'seatId': this.seatId,
      'filmId': this.filmId
    };

    this.bookingService.post(booking).subscribe(
      () => {
        this.toastr.success('Thank you', 'Booking successful');
        this.router.navigate(['/films']);
      },
      () => {
        this.toastr.error('Please try again', 'Booking unsuccessful');
        this.router.navigate(['/films']);
      }
    );
  }
}
