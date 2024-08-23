import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TICKETS_DATA } from "../data/tickets.data";
import { Ticket, TicketStatus } from "../types/ticket.interface";
import { v4 as uuid } from "uuid";

@Injectable({
  providedIn: "root",
})
export class TicketService {
  // The key difference is that BehaviorSubject has an initial value and always emits the most recent value to new subscribers, while Observable doesn't have a current value concept. BehaviorSubject is stateful and Observable is stateless.
  private _tickets = new BehaviorSubject(TICKETS_DATA);
  // The $ indicates this is an Observable. The asObservable() method converts the subject into a read-only Observable. This setup allows external components to subscribe to tickets$ without being able to directly modify the data.
  tickets$ = this._tickets.asObservable();

  constructor() {}

  createTicket(
    ticketTitle: string,
    ticketDesc: string,
    ticketAssignee: string
  ) {
    const ticket: Ticket = {
      id: uuid(),
      title: ticketTitle,
      description: ticketDesc,
      assignee: ticketAssignee,
      createdAt: new Date(),
      status: TicketStatus.PENDING,
    };

    // We first read the value of the current array, then use the spread operator to add the new ticket to this array
    const tickets = this._tickets.value;

    this._tickets.next([...tickets, ticket]);
  }
}
