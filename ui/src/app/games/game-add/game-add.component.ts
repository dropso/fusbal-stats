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

  team1: Array<string>;
  team2: Array<string>;
  teamSize = 1;

  constructor(private gameService: GameService, private router: Router) {
    this.team1 = [];
    this.team2 = [];
    for (let i =0; i< this.teamSize; i++) {
      this.team1.push('');
      this.team2.push('');
    }
   }

  addTeamMate1() {
    this.team1.push("");
  }

  addTeamMate2() {
    this.team2.push("");
  }

  saveGameEntry() {
    const game: GameEntry = {'team1': this.team1.filter(player => player !== ''), 'team2': this.team2.filter(player => player !== ''), 'score': [0, 0]};
    this.gameService.addGameEntry(game).subscribe(status => {
      if (status) {
        this.router.navigate(['/games']);
      }
    });
  }

  trackByIndex(index: number, obj:any): any {
    return index;
  }

  ngOnInit() {
  }

}
