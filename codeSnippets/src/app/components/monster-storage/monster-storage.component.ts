import { Component, OnInit } from '@angular/core';
import { MonsterService } from '../../services/monsterService/monster-service.service';
import {Observable} from 'rxjs/Observable';
import {MonsterUnit} from '../../classes/monsterUnit';

@Component({
  selector: 'app-monster-storage',
  templateUrl: './monster-storage.component.html',
  styleUrls: ['./monster-storage.component.scss']
})
export class MonsterStorageComponent implements OnInit {
  monsterObservableList: Observable<MonsterUnit[]>;

  constructor(private monsterService: MonsterService) {
      this.monsterObservableList = monsterService.GetMonsterUnits();
  }

  ngOnInit() {
  }

  getNumber() {
    const testNumber = 25;
    return new Array(testNumber);
  }

}
