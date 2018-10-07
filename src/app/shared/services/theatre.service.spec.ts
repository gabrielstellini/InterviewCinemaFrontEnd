import { TestBed, inject } from '@angular/core/testing';

import { TheatreService } from './theatre.service';

xdescribe('TheatreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheatreService]
    });
  });

  it('should be created', inject([TheatreService], (service: TheatreService) => {
    expect(service).toBeTruthy();
  }));
});
