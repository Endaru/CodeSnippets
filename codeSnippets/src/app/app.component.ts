import { Component } from '@angular/core';
import {HeroService} from "./services/heroService/hero-service.service";
import {MonsterService} from "./services/monsterService/monster-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private heroService: HeroService, private monsterService: MonsterService) {
    const heroObservable = heroService.GetHeroUnit();

    heroObservable.subscribe(heroUnit => {
      console.log(heroUnit);
    });

    const monsterObservable = monsterService.GetMonsterUnits();

    monsterObservable.subscribe(monsterUnitList => {
      console.log(monsterUnitList);
    });
  }
}
