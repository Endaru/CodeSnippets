import { Injectable } from '@angular/core';
import {HeroUnit} from '../../classes/heroUnit';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class HeroService {
  private heroUnit: HeroUnit;
  constructor() {
    // Temp create Hero for testing.
    this.CreateHeroUnit([1, 'Endaru', 200, 100, 20, 15, 20]);
  }

  GetHeroUnit(): Observable<HeroUnit> {
    return of (this.heroUnit);
  }

  CreateHeroUnit(list: [number, string, number, number, number, number, number]): boolean {
    this.heroUnit = new HeroUnit(list[0], list[1], list[2], list[3], list[4], list[5], list[6]);
    return true;
  }

  UpdateHeroUnit(list: [number, string, number, number, number, number, number]): boolean {
    this.heroUnit = new HeroUnit(list[0], list[1], list[2], list[3], list[4], list[5], list[6]);
    return true;
  }
}
