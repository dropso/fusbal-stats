import { Component, OnInit } from '@angular/core';
import { GamesTileComponent} from '../games-tile/games-tile.component';
import { GameService } from 'app/games/game.service';
import { GameEntry } from 'app/games/model/game-entry';

@Component({
  selector: 'app-games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.css']
})
export class GamesListComponent implements OnInit {

  games: Array<GameEntry>;
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getGameHistory().subscribe( data => {
     this.games = data;
    });
  }

}
