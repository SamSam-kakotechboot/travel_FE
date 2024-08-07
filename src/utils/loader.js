import ticketData from '../testdata/ticketall.json';
import TicketDetailData from '../testdata/ticket.json';

export async function homeLoader() {
  // const response = await fetch('/api/tickets/view/all');
  // if (!response.ok) {
  //   throw new Error('Failed to fetch tickets');
  // }
  // const data = await response.json();
  return ticketData;
}

export async function ticketLoader({ params }) {
  const { id } = params;
  const ticket = TicketDetailData.find(ticket => ticket.ticketID === id);
  if (!ticket) {
    throw new Error(`Ticket with ID ${id} not found`);
  }
  return ticket;
}
