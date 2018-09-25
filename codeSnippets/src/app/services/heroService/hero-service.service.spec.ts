import { TestBed, inject } from '@angular/core/testing';

import { HeroService} from './hero-service.service';

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HeroService]
    });
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('should create HeroUnit', inject([HeroService], (service: HeroService) => {
    const bool = service.CreateHeroUnit([1, 'test', 1, 1, 1, 1, 1]);
    expect(bool).toBeTruthy();
  }));

  it('should get HeroUnitList', inject([HeroService], (service: HeroService) => {
    service.CreateHeroUnit([1, 'test', 1, 1, 1, 1, 1]);
    const bool = service.GetHeroUnit();
    expect(bool).toBeTruthy();
  }));
});
