import { Component, signal, OnInit } from "@angular/core";

@Component({
  selector: "app-board",
  standalone: true,
  imports: [],
  templateUrl: "./board.component.html",
  styleUrl: "./board.component.css",
})
export class BoardComponent implements OnInit {
  board = signal<string[]>([]);

  ngOnInit(): void {
    this.generateBoard();
  }

  private generateBoard() {
    this.board.set(
      Array.from({ length: 9 }, (value, index) => String(index + 1))
    );
  }

  makeMove(move: number) {
    console.log("Move: ", move);
  }
}
