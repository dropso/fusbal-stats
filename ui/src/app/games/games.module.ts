import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesListComponent } from './games-list/games-list.component';
import { GamesTileComponent } from './games-tile/games-tile.component';
import { GameService } from 'app/games/game.service';
import { Routes, RouterModule } from '@angular/router';
import { GameAddComponent } from './game-add/game-add.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {path: '', component: GamesListComponent},
  {path: 'add', component: GameAddComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  providers: [GameService],
  declarations: [GamesListComponent, GamesTileComponent, GameAddComponent],
  exports: [GamesListComponent]
})
export class GamesModule { }
