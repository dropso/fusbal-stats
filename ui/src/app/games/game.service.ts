import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { GameEntry } from "app/games/model/game-entry";

@Injectable()
export class GameService {

  gamesUrl = 'http://localhost:5000/games';
  gamesAddSubUrl = '/add';
  constructor(private http: Http) { }

  getGameHistory(): Observable< Array<GameEntry> > {
    console.log('Requesting games history');
    return this.http.get(this.gamesUrl).map((res: Response) => { 
      console.log('Received history response: ' + res.statusText);
     return res.json();
    }).map(data => data['games']);
  }

  addGameEntry(game: GameEntry) {
    return this.http.put(this.gamesUrl + this.gamesAddSubUrl, {'game': game}).map(resp => {
      if(resp.status === 200) {
        return true;
      }
      else {
        return false;
      }
    });
  }

}
