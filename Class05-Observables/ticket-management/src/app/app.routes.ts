import { Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { TicketsComponent } from "./components/tickets/tickets.component";
import { CreateTicketComponent } from "./components/create-ticket/create-ticket.component";

export const routes: Routes = [
  { path: "", component: HomeComponent }, // localhost:4200
  { path: "tickets", component: TicketsComponent }, // localhost:4200/tickets
  { path: "create-ticket", component: CreateTicketComponent }, // localhost:4200/create-ticket
];
