import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SeatModel} from '../../../shared/models/seat.model';
import {from} from 'rxjs';
import {groupBy, mergeMap, toArray} from 'rxjs/operators';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.scss']
})
export class SeatSelectComponent implements OnInit, OnChanges {

  @Input() seats: SeatModel[];
  @Input() filmId: number;

  seatRows: SeatModel[][] = [];

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Refreshing seats');

    this.seatRows = [];

    from(this.seats).pipe(
      groupBy(seat => seat.row),
      mergeMap(seatRow => seatRow.pipe(toArray()))
    ).subscribe(result => {
      this.seatRows.push(result);
    });
  }
}
