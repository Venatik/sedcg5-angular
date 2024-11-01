import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";
import { GameProgress } from "../types/game-progress.interface";
import { checkDraw, checkWinner } from "./helpers";

export interface GameState {
  currentPlayer: "X" | "O";
  winner: string | null;
  isGameOver: boolean;
  gameProgress: GameProgress;
}

const initialState: GameState = {
  currentPlayer: "X",
  winner: null,
  isGameOver: false,
  gameProgress: {
    X: [],
    O: [],
  },
};

export const GameStore = signalStore(
  {
    providedIn: "root",
  },
  withState(initialState), // Default initial values of the signal store

  withMethods(state => ({
    // methods that will manipulate the signalStore

    makeMove(move: number) {
      if (state.winner() || state.isGameOver()) {
        return;
      }

      const currentPlayer = state.currentPlayer();
      const progress = state.gameProgress();

      if (progress["X"].includes(move) || progress["O"].includes(move)) return;

      progress[currentPlayer].push(move); // we change the value of the progress constant

      patchState(state, { gameProgress: progress }); // here we change the state with the new values

      const hasWinner = checkWinner(currentPlayer, progress);

      if (hasWinner) {
        patchState(state, { winner: currentPlayer, isGameOver: true });
      }

      const isGameDraw = checkDraw(progress, state.isGameOver());

      if (isGameDraw) {
        patchState(state, { winner: "DRAW", isGameOver: true });
      }

      this.togglePlayer();
    },

    togglePlayer() {
      patchState(state, {
        currentPlayer: state.currentPlayer() === "X" ? "O" : "X",
      });
    },

    resetGame() {
      patchState(state, initialState);
    },
  }))
);
