import { Injectable } from '@angular/core';
import {MonsterUnit} from '../../classes/monsterUnit';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class MonsterService {
  private monsterUnitList: MonsterUnit[] = [];

  // Temp variable to create monsterUnits for testing
  MONSTERNAMES: [string] = [
      'skeleton',
      'ghost',
      'fairy',
      'dragon',
      'wyvern',
      'dwarf',
      'elf',
      'slime',
      'goblin',
      'wolf',
  ];

  constructor() {
      // fake Monsters until i create a file;
      let i = 2;
      for (const name of this.MONSTERNAMES) {
          this.addMonsterUnit([i, name, 1, 1, 1, 1, 1]);
          i++;
      }
  }

  GetMonsterUnits(): Observable<MonsterUnit[]> {
    return of (this.monsterUnitList);
  }

  addMonsterUnit(list: [number, string, number, number, number, number, number]): boolean {
    this.monsterUnitList.push(new MonsterUnit(list[0], list[1], list[2], list[3], list[4], list[5], list[6]));
    return true;
  }
}
