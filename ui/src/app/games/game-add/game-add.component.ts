import { Component, OnInit, Input } from '@angular/core';
import { GameEntry } from 'app/games/model/game-entry';
import { GameService } from 'app/games/game.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-game-add',
  templateUrl: './game-add.component.html',
  styleUrls: ['./game-add.component.css']
})
export class GameAddComponent implements OnInit {

  winners: string;
  losers: string;

  constructor(private gameService: GameService, private router: Router) { }

  saveGameEntry() {
    const game: GameEntry = {'team1': [this.winners], 'team2': [this.losers], 'score': [0, 0]};
    this.gameService.addGameEntry(game).subscribe(status => {
      if (status) {
        this.router.navigate(['/games']);
      }
    });
  }

  ngOnInit() {
  }

}
