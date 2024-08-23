import { Ticket, TicketStatus } from "../types/ticket.interface";

export const TICKETS_DATA: Ticket[] = [
  {
    id: "1",
    title: "Ticket 1",
    description: "Description ticket 1",
    assignee: "Johnnie",
    status: TicketStatus.PENDING,
    createdAt: new Date("12-08-2024"),
  },
  {
    id: "2",
    title: "Ticket 2",
    description: "Description ticket 2",
    assignee: "Jane",
    status: TicketStatus.PENDING,
    createdAt: new Date("12-08-2024"),
  },
  {
    id: "3",
    title: "Ticket 3",
    description: "Description ticket 3",
    assignee: "Laz",
    status: TicketStatus.IN_DEVELOPMENT,
    createdAt: new Date("12-08-2024"),
  },
  {
    id: "4",
    title: "Ticket 4",
    description: "Description ticket 4",
    assignee: "Bobe",
    status: TicketStatus.IN_DEVELOPMENT,
    createdAt: new Date("09-08-2024"),
  },
];
