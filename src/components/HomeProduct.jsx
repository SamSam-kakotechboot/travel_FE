import { useNavigate } from 'react-router-dom';
import StarIcon from './icons/StarIcon';
import HalfStarIcon from './icons/HalfStarIcon';

export default function HomeProduct({ id }) {
  const navigate = useNavigate();
  const handleProductClick = () => {
    navigate(`/tickets/${id}`);
  };

  return (
    <div
      onClick={handleProductClick}
      className="flex flex-col items-center bg-background overflow-hidden w-[300px] h-auto p-4"
    >
      <div className="w-full h-[298px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src="https://via.placeholder.com/280x335"
          alt="DisneyLand Paris"
        />
      </div>
      <div className="text-black text-lg font-poppins font-bold mt-4">
        DisneyLand Paris
      </div>
      <div className="flex items-center gap-[2px] mt-2">
        {[...Array(4)].map((_, i) => (
          <StarIcon key={i}></StarIcon>
        ))}
        <HalfStarIcon />
        <span className="text-black text-sm font-poppins font-normal ml-2">
          4.5/5
        </span>
      </div>
      <div className="text-black text-2xl font-poppins font-semibold mt-2">
        120,000
      </div>
    </div>
  );
}
