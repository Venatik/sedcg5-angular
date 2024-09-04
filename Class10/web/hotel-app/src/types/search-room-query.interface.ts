import { SortDirection } from "@angular/material/sort";
import { Board } from "./board.enum";
import { ParkingType } from "./parking-type.enum";
import { RoomType } from "./room-type.enum";
import { RoomView } from "./room-view.enum";

export interface SearchRoomQuery {
  searchTerm: string;
  type: RoomType;
  pricePerNightMin: number;
  pricePerNightMax: number;
  beds: number;
  extraBeds: number;
  baths: number;
  guestCapacity: number;
  view: RoomView;
  parking: ParkingType;
  isPetFriendly: boolean;
  board: Board;
  hasAC: boolean;
  availableFrom: string;
  availableTo: string;
  page: number;
  sortBy: string;
  sortDirection: SortDirection;
}

// Properties aren't optional because Partial<SearchRoomQuery> is added in the service. Partial makes all properties optional.
