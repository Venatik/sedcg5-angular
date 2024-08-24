import { Component, signal } from "@angular/core";
import { TicketComponent } from "../ticket/ticket.component";
import { TicketService } from "../../services/ticket.service";
import { Ticket } from "../../types/ticket.interface";
import { FilterPipe } from "../../pipes/filter.pipe";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [TicketComponent, FilterPipe],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {
  tickets = signal<Ticket[]>([]);
  searchValue = signal("");

  constructor(private readonly ticketService: TicketService) {}

  ngOnInit() {
    this.ticketService.tickets$.subscribe(tickets => {
      this.tickets.set(tickets);
    });
  }

  onInputChange(event: Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    // console.log(value);

    this.searchValue.set(value);
  }
}
