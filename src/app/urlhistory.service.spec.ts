import { TestBed } from '@angular/core/testing';

import { UrlhistoryService } from './urlhistory.service';

describe('UrlhistoryService', () => {
  let service: UrlhistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrlhistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
