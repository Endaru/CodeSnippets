import { TestBed, inject } from '@angular/core/testing';

import { MonsterServiceService } from './monster-service.service';

describe('MonsterServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonsterServiceService]
    });
  });

  it('should be created', inject([MonsterServiceService], (service: MonsterServiceService) => {
    expect(service).toBeTruthy();
  }));
});
