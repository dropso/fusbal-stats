/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { GamesTileComponent } from './games-tile.component';

describe('GamesTileComponent', () => {
  let component: GamesTileComponent;
  let fixture: ComponentFixture<GamesTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
