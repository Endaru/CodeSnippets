import {Injectable} from '@angular/core';

@Injectable()
export class Unit {
    ID: number;
    name: string;

    hp: number;
    sp: number;
    atk: number;
    def: number;
    spd: number;

    constructor(ID: number, name: string, hp: number, sp: number, atk: number, def: number, spd: number, ) {
        this.ID = ID;
        this.name = name;

        this.hp = hp;
        this.sp = sp;
        this.atk = atk;
        this.def = def;
        this.spd = spd;
    }
}
