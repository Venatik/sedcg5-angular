import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Room } from "../types/room.interface";
import { environment } from "../environment";
import { SearchRoomQuery } from "../types/search-room-query.interface";
import { catchError, Observable, of } from "rxjs";
import { Response } from "../types/response.interface";

@Injectable({
  providedIn: "root",
})
export class RoomsService {
  private roomPath = `${environment.apiUrl}/rooms`;

  constructor(private readonly http: HttpClient) {}

  // getRooms() {
  //   return this.http.get<{ payload: Room[]; total: number }>(
  //     `${this.roomPath}`
  //   );
  // }

  getRooms(
    searchQuery: Partial<SearchRoomQuery> = {}
  ): Observable<Response<Room[]>> {
    return this.http
      .get<Response<Room[]>>(this.roomPath, {
        params: {
          ...searchQuery, // spread the properties of the searchQuery object into the params object
        },
      })
      .pipe(
        catchError(error => {
          console.log("Error:", error);
          return of({ payload: [], total: 0 });
        })
      );
  }
}
