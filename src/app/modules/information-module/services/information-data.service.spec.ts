import { TestBed } from '@angular/core/testing';

import { InformationDataService } from './information-data.service';

describe('InformationDataService', () => {
  let service: InformationDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformationDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
