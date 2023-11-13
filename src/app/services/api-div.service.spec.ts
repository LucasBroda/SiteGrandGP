import { TestBed } from '@angular/core/testing';

import { ApiDivService } from './api-div.service';

describe('ApiDivService', () => {
  let service: ApiDivService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiDivService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
