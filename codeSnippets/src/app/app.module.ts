import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoadingComponentComponent } from './components/loading-component/loading-component.component';
import {MonsterStorageComponent} from "./components/monster-storage/monster-storage.component";
import {MonsterCardComponent} from "./components/monster-card/monster-card.component";
import {HeroService} from "./services/heroService/hero-service.service";
import {MonsterService} from "./services/monsterService/monster-service.service";


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponentComponent,
    MonsterStorageComponent,
    MonsterCardComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    HeroService,
    MonsterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
