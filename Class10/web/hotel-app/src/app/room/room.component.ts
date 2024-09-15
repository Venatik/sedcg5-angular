import { Component, input, signal } from "@angular/core";
import { Room } from "../../types/room.interface";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { CurrencyPipe } from "@angular/common";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { FormControl, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TooltipPosition, MatTooltipModule } from "@angular/material/tooltip";
import { CdkScrollable } from "@angular/cdk/scrolling";
import { MatSelectModule } from "@angular/material/select";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatChipsModule } from "@angular/material/chips";
import { ParkingType } from "../../types/parking-type.enum";
import { Board } from "../../types/board.enum";
import { RoomView } from "../../types/room-view.enum";
import { RouterLink } from "@angular/router";
import { RoomDetailsComponent } from "../room-details/room-details.component";

@Component({
  selector: "app-room",
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    CurrencyPipe,
    MatExpansionModule,
    MatBadgeModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CdkScrollable,
    MatButtonModule,
    MatTooltipModule,
    MatChipsModule,
    RouterLink,
  ],
  templateUrl: "./room.component.html",
  styleUrl: "./room.component.css",
})
export class RoomComponent {
  room = input.required<Room>();
  ParkingType = ParkingType;
  Board = Board;
  RoomView = RoomView;
}