import { TestBed, inject } from '@angular/core/testing';

import { ApiService } from './api.service';

xdescribe('ApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService]
    });
  });

  it('should be created', inject([ApiService], (service: ApiService<any>) => {
    expect(service).toBeTruthy();
  }));
});
