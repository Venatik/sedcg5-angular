import { Component, input } from "@angular/core";
import { Room } from "../../types/room.interface";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-room",
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CurrencyPipe],
  templateUrl: "./room.component.html",
  styleUrl: "./room.component.css",
})
export class RoomComponent {
  room = input.required<Room>();
}
