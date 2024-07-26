import { useParams } from 'react-router-dom';
import Header from './Header';
import TicketInfo from './TicketInfo';

export default function TicketDetail() {
  const { id } = useParams();
  return (
    <div>
      <Header />
      <div className="relative bg-white min-h-">
        <TicketInfo id={id} />
      </div>
    </div>
  );
}
