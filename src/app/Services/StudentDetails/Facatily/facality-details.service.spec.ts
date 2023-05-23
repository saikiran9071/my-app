import { TestBed } from '@angular/core/testing';
import { FacalityDetailsService } from './facality-details.service';

describe('FacalityDetailsService', () => {
  let service: FacalityDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacalityDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
