import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';

import { BookingFormComponent } from './booking-form.component';
import {FormsModule} from '@angular/forms';
import {SeatSelectComponent} from './seat-select/seat-select.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FilmService} from '../../shared/services/film.service';
import {ActivatedRoute} from '@angular/router';
import { of } from 'rxjs';

fdescribe('BookingFormComponent', () => {
  let component: BookingFormComponent;
  let fixture: ComponentFixture<BookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        BookingFormComponent,
        SeatSelectComponent
      ],
      imports: [
        FormsModule,
        RouterTestingModule,
        HttpClientTestingModule
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            url: of([{path: 1}])
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Sample unit test to demonstrate knowledge of using karma/jasmine
   */

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should request film details',
    inject(
      [HttpTestingController, FilmService],
      (
        httpMock: HttpTestingController,
        filmService: FilmService,
      ) => {
        spyOn(filmService, 'find');

        fixture = TestBed.createComponent(BookingFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        expect(filmService.find).toHaveBeenCalled();
      }
    )
  );
});
