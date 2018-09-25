import {Injectable} from '@angular/core';
import {Unit} from './unit';

@Injectable()
export class MonsterUnit extends Unit {
    constructor( ID: number, name: string, hp: number, sp: number, atk: number, def: number, spd: number, ) {
        super(ID, name, hp, sp, atk, def, spd);
    }
}

