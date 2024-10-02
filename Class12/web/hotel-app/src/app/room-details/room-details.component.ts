import { Component, signal } from "@angular/core";
import { catchError, Observable, of, switchMap, tap } from "rxjs";
import { Room } from "../../types/room.interface";
import { RoomsService } from "../../services/room.service";
import { ActivatedRoute, Router } from "@angular/router";
import { AsyncPipe, CurrencyPipe } from "@angular/common";

@Component({
  selector: "app-room-details",
  standalone: true,
  imports: [AsyncPipe, CurrencyPipe],
  templateUrl: "./room-details.component.html",
  styleUrl: "./room-details.component.css",
})
export class RoomDetailsComponent {
  room: Observable<Room | null> = new Observable<Room | null>();
  isLoading = signal<boolean>(false);

  constructor(
    private readonly roomService: RoomsService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.getRoom();
  }

  getRoom() {
    this.isLoading.set(true);
    this.room = this.route.params.pipe(
      switchMap(params => this.roomService.getRoom(params["id"])),
      catchError(error => {
        console.log(error);
        if (error.statusCode === 404) {
          this.router.navigate(["/not-found"]);
        }

        if (error.statusCode > 499 && error.statusCode < 600) {
          console.log(error);
          // Track the error so it can be handled and fix the issue in the future
        }

        return of(null);
      }),
      tap(() => this.isLoading.set(false))
    );
  }
}
