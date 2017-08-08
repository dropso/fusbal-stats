import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesTileComponent } from './games-tile/games-tile.component';
import { GameService } from 'app/games/game.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [GameService],
  declarations: [GamesListComponent, GamesTileComponent],
  exports: [GamesListComponent]
})
export class GamesModule { }
