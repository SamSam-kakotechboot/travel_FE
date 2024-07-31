import { useParams } from 'react-router-dom';
import Header from './Header';
import TicketInfo from './TicketInfo';
import Reviews from './Reviews';

export default function TicketDetail() {
  const { id } = useParams();
  return (
    <div>
      <div className="relative bg-white min-h-">
        <TicketInfo id={id} />
        <Reviews id={id} />
      </div>
    </div>
  );
}
