import React, { useState, useCallback, useMemo } from 'react';
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom';
import TicketIcon from '../components/icons/TicketIcon';
import PackageIcon from '../components/icons/PackageIcon';
import BlackButton from '../components/BlackButton';
import TrashCanIcon from '../components/icons/TrashCanIcon';
import PageButtons from '../components/PageButtons';
import PageEditIcon from '../components/icons/PageEditIcon';

export default function ProductPage() {
  const { tickets, orders, totalCount } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkedOrders, setCheckedOrders] = useState({});
  const [allChecked, setAllChecked] = useState(false);
  const navigate = useNavigate();

  const pageSize = 7;
  const pageNumber = searchParams.get('pageNumber') || 1;
  const totalPages = useMemo(
    () => Math.ceil(totalCount / pageSize),
    [totalCount]
  );

  const handleCheckAll = useCallback(
    checked => {
      setAllChecked(checked);
      setCheckedOrders(
        orders.reduce(
          (acc, order) => ({ ...acc, [order.orderId]: checked }),
          {}
        )
      );
    },
    [orders]
  );

  const handleOrderCheck = useCallback((orderId, checked) => {
    setCheckedOrders(prev => {
      const newCheckedOrders = { ...prev, [orderId]: checked };
      setAllChecked(Object.values(newCheckedOrders).every(Boolean));
      return newCheckedOrders;
    });
  }, []);

  const handleApproveOrders = useCallback(() => {
    const approvedOrderIds = Object.keys(checkedOrders).filter(
      id => checkedOrders[id]
    );
    console.log('Approved order IDs:', approvedOrderIds);
    // API 호출 등 필요한 로직 추가
  }, [checkedOrders]);

  const handlePageChange = useCallback(
    newPage => {
      setSearchParams({ pageNumber: newPage });
      window.scrollTo(0, 0);
    },
    [setSearchParams]
  );

  return (
    <div className="bg-white min-h-screen py-12 px-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <TicketManagement
          tickets={tickets}
          totalPages={totalPages}
          currentPage={Number(pageNumber)}
          onPageChange={handlePageChange}
          navigate={navigate}
        />
        <OrderManagement
          orders={orders}
          allChecked={allChecked}
          checkedOrders={checkedOrders}
          onCheckAll={handleCheckAll}
          onOrderCheck={handleOrderCheck}
          onApproveOrders={handleApproveOrders}
        />
      </div>
    </div>
  );
}

function TicketManagement({
  tickets,
  totalPages,
  currentPage,
  onPageChange,
  navigate,
}) {
  return (
    <div
      className="p-6 rounded-lg shadow-md flex-1 flex flex-col"
      style={{ height: '700px' }}
    >
      <div className="flex items-center mb-4">
        <TicketIcon className="w-8 h-8 mr-3" />
        <h2 className="text-2xl font-semibold ml-2">상품 관리</h2>
      </div>
      <div className="flex-grow overflow-auto">
        <div className="space-y-4">
          {tickets.map(ticket => (
            <TicketItem
              key={ticket.ticketId}
              item={ticket}
              navigate={navigate}
            />
          ))}
        </div>
      </div>
      <div className="mt-4">
        <PageButtons
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
}

function OrderManagement({
  orders,
  allChecked,
  checkedOrders,
  onCheckAll,
  onOrderCheck,
  onApproveOrders,
}) {
  return (
    <div className="p-6 rounded-lg shadow-md flex-1">
      <div className="flex items-center mb-4">
        <PackageIcon className="w-8 h-8 mr-3" />
        <h2 className="text-2xl font-semibold ml-2">대기중인 주문</h2>
        <div className="ml-auto">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={allChecked}
              onChange={e => onCheckAll(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
            <span className="ml-2 text-gray-700">전체 선택</span>
          </label>
        </div>
      </div>
      <div className="space-y-4">
        {orders.map(order => (
          <OrderNotDelivered
            key={order.orderId}
            item={order}
            checked={checkedOrders[order.orderId] || false}
            onCheck={onOrderCheck}
          />
        ))}
      </div>
      <div className="mt-6 flex justify-center">
        <BlackButton
          width="572px"
          height="40px"
          text="주문하기"
          onClick={onApproveOrders}
        />
      </div>
    </div>
  );
}

function TicketItem({ item, navigate }) {
  return (
    <div className="bg-white p-4 rounded-md shadow flex justify-between">
      <h3 className="font-semibold text-xl">{item.title}</h3>
      <div className="space-x-4 flex">
        <PageEditIcon
          isClickable={true}
          onClick={() => {
            navigate(`edit/${item.ticketId}`); // 적절한 경로로 수정
          }}
        />
        <TrashCanIcon isClickable={true} onClick={() => {}} />
      </div>
    </div>
  );
}

function OrderNotDelivered({ item, checked, onCheck }) {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-md shadow">
      <div>
        <h3 className="font-semibold">{item.ticketTitle}</h3>
        <p className="text-sm text-gray-600">주문 ID: {item.orderId}</p>
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={e => onCheck(item.orderId, e.target.checked)}
        className="form-checkbox h-5 w-5 text-blue-600"
      />
    </div>
  );
}
