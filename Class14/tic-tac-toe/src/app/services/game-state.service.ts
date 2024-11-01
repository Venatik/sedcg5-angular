import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { GameProgress } from "../types/game-progress.interface";

@Injectable({
  providedIn: "root",
})
export class GameStateService {
  constructor() {}

  private readonly WINNING_PATTERNS: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  private _currentPlayer = new BehaviorSubject<"X" | "O">("X");
  currentPlayer$ = this._currentPlayer.asObservable();

  private _winner = new BehaviorSubject<string | null>(null);
  winner$ = this._winner.asObservable();

  private _isGameOver = new BehaviorSubject<boolean>(false);
  isGameOver$ = this._isGameOver.asObservable();

  private _gameProgress = new BehaviorSubject<GameProgress>({
    X: [],
    O: [],
  });
  gameProgress$ = this._gameProgress.asObservable();

  makeMove(move: number) {}

  checkWinner() {}

  resetGame() {}
}
