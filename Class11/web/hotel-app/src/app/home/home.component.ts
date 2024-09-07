import { Component, effect, inject, signal } from "@angular/core";
import { RoomsService } from "../../services/room.service";
import { finalize, map, Observable, Subscription, tap } from "rxjs";
import { SearchRoomQuery } from "../../types/search-room-query.interface";
import { MatPaginatorModule, PageEvent } from "@angular/material/paginator";
import { RoomsComponent } from "../rooms/rooms.component";
import { AsyncPipe } from "@angular/common";
import { SearchComponent } from "../search/search.component";
import { RoomsStore } from "../../store/rooms.store";
import { LoaderComponent } from "../loader/loader.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [
    RoomsComponent,
    MatPaginatorModule,
    AsyncPipe,
    SearchComponent,
    LoaderComponent,
  ],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  readonly roomsStore = inject(RoomsStore);
  subscription: Subscription = new Subscription();

  constructor(private readonly roomService: RoomsService) {
    effect(
      () => {
        this.roomsStore.setLoading(true);
        this.getRooms(this.roomsStore.searchParams());
      },
      // We use this flag when we want to write or modify signal values.
      // It allows updates to signals during the effect's execution
      { allowSignalWrites: true }
    );
  }

  ngOnInit() {
    console.log("Home component loaded");
    this.getRooms();
  }

  getRooms(searchParams: Partial<SearchRoomQuery> = {}) {
    this.subscription = this.roomService
      .getRooms(searchParams)
      .subscribe(response => {
        this.roomsStore.setTotal(response.total);
        this.roomsStore.setRooms(response.payload);
        this.roomsStore.setLoading(false);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
