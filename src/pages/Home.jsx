import { useLoaderData, useNavigate } from 'react-router-dom';
import HomeProduct from '../components/HomeProduct';
import { getCurrentItems, getTotalPages } from '../utils/pagination';
import { useEffect, useState } from 'react';
import PageButtons from '../components/PageButtons';
import Dropdown from '../components/DropDownButton';

export default function Home() {
  const ticketsData = useLoaderData(); // loader에서 가져온 데이터 사용
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const initialPage = Number(urlParams.get('pageNumber')) || 1;
  const initialPageSize = Number(urlParams.get('pageSize')) || 4;
  const initialKeyword = urlParams.get('keyword') || 'Latest';

  const [currentPage, setCurrentPage] = useState(initialPage);
  const [viewall, setViewAll] = useState(false);
  const [ticketsPerPage, setTicketsPerPage] = useState(initialPageSize);
  const [keyword, setKeyword] = useState(initialKeyword); // keyword 상태 추가

  const totalPages = getTotalPages(ticketsData, ticketsPerPage);
  const currentTickets = getCurrentItems(
    ticketsData,
    currentPage,
    ticketsPerPage
  );

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 변경 시 스크롤을 맨 위로 이동
  }, [currentPage]);

  useEffect(() => {
    const params = new URLSearchParams({
      pageNumber: currentPage,
      pageSize: ticketsPerPage,
    });

    if (keyword) {
      params.append('keyword', keyword);
    }

    const newUrl = `?${params.toString()}`;
    if (newUrl !== window.location.search) {
      navigate(newUrl, { replace: true }); // URL이 변경될 때만 navigate
    }
  }, [keyword, currentPage, ticketsPerPage, navigate]);

  return (
    <div className="relative bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {!viewall && (
          <div className="text-center text-black text-7xl font-poppins font-bold mb-40 mt-40">
            NEW ARRIVALS
          </div>
        )}
        <div className="flex flex-wrap justify-start mx-4">
          <Dropdown onSelect={setKeyword} />
        </div>
        <div className="flex flex-wrap justify-start gap-3">
          {currentTickets.map(ticket => (
            <HomeProduct key={ticket.ticketId} ticket={ticket} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {!viewall && (
            <button
              className="px-6 py-3 text-black text-base font-poppins font-medium border border-gray-200 rounded-full hover:bg-gray-100"
              onClick={() => {
                setTicketsPerPage(12);
                setViewAll(true);
              }}
            >
              View All
            </button>
          )}
          {viewall && (
            <PageButtons
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
}
