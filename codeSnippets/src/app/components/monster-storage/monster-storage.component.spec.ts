import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterStorageComponent } from './monster-storage.component';

describe('MonsterStorageComponent', () => {
  let component: MonsterStorageComponent;
  let fixture: ComponentFixture<MonsterStorageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonsterStorageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
