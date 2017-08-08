import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import { GameEntry } from "app/games/model/game-entry";

@Injectable()
export class GameService {

  gamesUrl = 'http://localhost:5000/games';
  constructor(private http: Http) { }

  getGameHistory(): Observable< Array<GameEntry> > {
    return this.http.get(this.gamesUrl).map((res: Response) => res.json()).map(data => data['games']);
  }

}
