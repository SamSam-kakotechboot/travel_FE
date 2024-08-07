import ticketData from '../testdata/ticketall.json';

export async function homeLoader() {
  // const response = await fetch('/api/tickets/view/all');
  // if (!response.ok) {
  //   throw new Error('Failed to fetch tickets');
  // }
  // const data = await response.json();
  return ticketData;
}
