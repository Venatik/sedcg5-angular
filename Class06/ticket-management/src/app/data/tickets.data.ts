import { Ticket, TicketStatus } from "../types/ticket.interface";

export const TICKETS_DATA: Ticket[] = [
  {
    id: "1",
    title: "Ticket 1",
    description: "Description ticket 1",
    assignee: "Johnnie",
    status: TicketStatus.DONE,
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
    status: TicketStatus.PENDING,
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
  {
    id: "5",
    title: "Ticket 5",
    description: "Description ticket 5",
    assignee: "Bobe",
    status: TicketStatus.IN_DEVELOPMENT,
    createdAt: new Date("09-08-2024"),
  },
  {
    id: "6",
    title: "Ticket 6",
    description: "Description ticket 6",
    assignee: "Jane",
    status: TicketStatus.IN_DEVELOPMENT,
    createdAt: new Date("09-08-2024"),
  },
];
