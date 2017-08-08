import { Component, OnInit, Input } from '@angular/core';
import { GameEntry } from "app/games/model/game-entry";


@Component({
  selector: 'app-games-tile',
  templateUrl: './games-tile.component.html',
  styleUrls: ['./games-tile.component.css']
})
export class GamesTileComponent implements OnInit {

  @Input() game: GameEntry;
  
  constructor() { }

  ngOnInit() {
    
  }

}
