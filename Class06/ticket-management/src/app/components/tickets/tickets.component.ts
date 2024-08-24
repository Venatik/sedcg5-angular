import { Component, signal } from "@angular/core";
import { TicketService } from "../../services/ticket.service";
import { Ticket } from "../../types/ticket.interface";
import { TicketComponent } from "../ticket/ticket.component";
import { Subscription } from "rxjs";

@Component({
  selector: "app-tickets",
  standalone: true,
  imports: [TicketComponent],
  templateUrl: "./tickets.component.html",
  styleUrl: "./tickets.component.css",
})
export class TicketsComponent {
  tickets = signal<Ticket[]>([]);
  interval: any;

  private subscriptions: Subscription[];
  constructor(private readonly ticketService: TicketService) {}

  ngOnInit() {
    const ticketsSubscription = this.ticketService.tickets$.subscribe(data => {
      console.log(data);

      // console.log("SUBSCRIBE IN TICKETS");
      // WITH SIGNAL SYNTAX
      this.tickets.set(data);

      // WITHOUT USING SIGNAL
      // this.tickets = data;
    });

    this.subscriptions.push(ticketsSubscription);
    this.interval = setInterval(() => {
      console.log("Expensive Task");
    }, 1000);
  }

  ngOnDestroy() {
    console.log("On destroy");

    clearInterval(this.interval);

    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
