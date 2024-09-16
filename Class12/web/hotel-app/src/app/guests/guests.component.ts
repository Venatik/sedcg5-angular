import { Component } from "@angular/core";
import { RoomsService } from "../../services/room.service";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { Room } from "../../types/room.interface";
import { MatButtonModule } from "@angular/material/button";
import { RoomType } from "../../types/room-type.enum";
import { RoomView } from "../../types/room-view.enum";
import { ParkingType } from "../../types/parking-type.enum";
import { Board } from "../../types/board.enum";

@Component({
  selector: "app-guests",
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: "./guests.component.html",
  styleUrl: "./guests.component.css",
})
export class GuestsComponent {
  defaultRoom: Room = {
    id: "b175403d-b639-422b-8bac-42a3cf422e0b",
    name: "Deluxe Sea View Suite",
    description:
      "Luxurious suite with panoramic sea views, featuring a king-sized bed, separate living area, and a private balcony. Amenities include free Wi-Fi, flat-screen TV, minibar, and a spacious bathroom with a jacuzzi.",
    type: RoomType.Double,
    pricePerNight: 350,
    beds: 1,
    extraBeds: 1,
    baths: 2,
    guestCapacity: 3,
    view: RoomView.Garden,
    images: ["./room-images/deluxe-sea-view-suite.webp"],
    city: "Split",
    country: "Croatia",
    parking: ParkingType.None,
    board: Board.BreakfastOnly,
    isPetFriendly: false,
    hasAirConditioning: true,
    bookingsCount: 0,
  };

  roomBehaviorSubject: BehaviorSubject<Room | null> =
    new BehaviorSubject<Room | null>(null);
  // Subject has no initial value
  roomSubject: Subject<Room | null> = new Subject<Room | null>();
  roomObservable: Observable<Room | null> = new Observable<Room | null>();

  // Choose Subject when you need a simple multicast stream without a concept of current value, BehaviorSubject when you need a multicast stream with a current value, and Observable for basic streams or when you don't need multicasting.

  roomId = "83d23e8e-e2c9-40a7-8c34-daebe6fdd8e4";

  constructor(private readonly roomService: RoomsService) {}

  ngOnInit() {
    this.roomObservable = this.roomService.getRoom(this.roomId);
    this.roomObservable.subscribe(res => console.log(res));
  }

  emitSubjectValue() {
    this.roomSubject.next(this.defaultRoom);
  }

  getSubjectValue() {
    this.roomSubject.subscribe(result => {
      console.log(result);
    });
  }

  emitBehaviorSubjectValue() {
    this.roomBehaviorSubject.next(this.defaultRoom);
  }

  getBehaviorSubjectValue() {
    this.roomBehaviorSubject.subscribe(result => {
      console.log(result);
    });
  }
}
