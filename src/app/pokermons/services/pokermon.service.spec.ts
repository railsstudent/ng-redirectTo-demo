import { TestBed } from '@angular/core/testing';

import { PokermonService } from './pokermon.service';

describe('PokermonService', () => {
  let service: PokermonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokermonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
