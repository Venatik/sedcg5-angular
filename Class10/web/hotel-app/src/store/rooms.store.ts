import { Room } from "../types/room.interface";
import { SortDirection } from "../types/sort-direction.enum";
import { patchState, signalStore, withMethods, withState } from "@ngrx/signals";

// Interface that represents the store object
export interface RoomsState {
  rooms: Room[];
  searchTerm: string;
  page: number;
  pageSize: number;
  total: number;
  isLoading: boolean;
  sortBy: string;
  sortDirection: SortDirection;
}

// This constant defines the initial/default state of the RoomsState
const defaultState: RoomsState = {
  rooms: [],
  searchTerm: "",
  page: 0,
  pageSize: 5,
  total: 0,
  isLoading: false,
  sortBy: "name",
  sortDirection: SortDirection.Asc,
};

export const RoomsStore = signalStore(
  { providedIn: "root" },

  withState(defaultState),

  // Define the actions that can be dispatched to the store. These actions will be used to update the state of the store.
  withMethods(state => ({
    setRooms: (rooms: Room[]) => {
      patchState(state, { rooms });
    },
    setSearchTerm: (searchTerm: string) => {
      patchState(state, { searchTerm, page: 0 });
    },
    setPage: (page: number) => {
      patchState(state, { page });
    },
    setPageSize: (pageSize: number) => {
      patchState(state, { pageSize });
    },
    setTotal: (total: number) => {
      patchState(state, { total });
    },
    setSort: (sortBy: string) => {
      patchState(state, { sortBy });
    },
    setLoading: (isLoading: boolean) => {
      patchState(state, { isLoading });
    },
  }))
);