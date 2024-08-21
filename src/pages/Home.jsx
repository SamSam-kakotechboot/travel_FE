import { useLoaderData, useSearchParams } from 'react-router-dom';
import HomeProduct from '../components/HomeProduct';
import { useCallback, useMemo } from 'react';
import PageButtons from '../components/PageButtons';
import Dropdown from '../components/DropDownButton';
import { getUrlParams } from '../utils/urlParam';

export default function Home() {
  const { tickets, totalCount } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();

  // URL 파라미터 가져오기
  const { pageSize, pageNumber } = getUrlParams(searchParams);

  const totalPages = useMemo(
    () => Math.ceil(totalCount / Number(pageSize)),
    [totalCount, pageSize]
  );

  // viewall 상태를 pageSize에 따라 결정
  const viewall = useMemo(() => pageSize === '12', [pageSize]);

  const updateParams = useCallback(
    updates => {
      const newParams = new URLSearchParams(searchParams);
      Object.entries(updates).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          newParams.set(key, value);
        } else {
          newParams.delete(key);
        }
      });
      setSearchParams(newParams);
    },
    [searchParams, setSearchParams]
  );

  const handlePageChange = useCallback(
    newPage => {
      updateParams({ pageNumber: newPage });
      window.scrollTo(0, 0);
    },
    [updateParams]
  );

  const handleKeywordChange = useCallback(
    newKeyword => {
      updateParams({ keyword: newKeyword, pageNumber: 1 });
    },
    [updateParams]
  );

  const handleViewAll = useCallback(() => {
    updateParams({ pageSize: 12, pageNumber: 1 });
  }, [updateParams]);

  return (
    <div className="relative bg-white min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {!viewall && (
          <div className="text-center text-black text-7xl font-poppins font-bold mb-40 mt-40">
            NEW ARRIVALS
          </div>
        )}
        <div className="flex flex-wrap justify-start mx-4">
          <Dropdown onSelect={handleKeywordChange} />
        </div>
        <div className="flex flex-wrap justify-start gap-3">
          {tickets.map(ticket => (
            <HomeProduct key={ticket.ticketId} ticket={ticket} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {!viewall && (
            <button
              className="px-6 py-3 text-black text-base font-poppins font-medium border border-gray-200 rounded-full hover:bg-gray-100"
              onClick={handleViewAll}
            >
              View All
            </button>
          )}
          {viewall && (
            <PageButtons
              totalPages={totalPages}
              currentPage={Number(pageNumber)}
              onPageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </div>
  );
}
