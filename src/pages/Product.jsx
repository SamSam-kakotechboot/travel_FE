import React, { useState, useCallback, useMemo } from 'react';
import {
  redirect,
  useLoaderData,
  useNavigate,
  useSearchParams,
  useSubmit,
} from 'react-router-dom';
import TicketIcon from '../components/icons/TicketIcon';
import PackageIcon from '../components/icons/PackageIcon';
import BlackButton from '../components/BlackButton';
import TrashCanIcon from '../components/icons/TrashCanIcon';
import PageButtons from '../components/PageButtons';
import PageEditIcon from '../components/icons/PageEditIcon';
import AddProductModal from '../components/AddProductModal';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

export default function ProductPage() {
  const { tickets, orders, totalCount } = useLoaderData();
  const [searchParams, setSearchParams] = useSearchParams();
  const [checkedOrders, setCheckedOrders] = useState({});
  const [allChecked, setAllChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태 추가
  const navigate = useNavigate();
  const submit = useSubmit();

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

  const handleApproveOrders = () => {
    const approvedOrderIds = Object.keys(checkedOrders).filter(
      id => checkedOrders[id]
    );
    if (approvedOrderIds.length === 0) {
      return;
    }

    const formData = new FormData();
    formData.append('intent', 'approve-orders');
    formData.append('approvedOrderIds', JSON.stringify(approvedOrderIds));

    submit(formData, { method: 'post' });
  };

  const handlePageChange = useCallback(
    newPage => {
      setSearchParams({ pageNumber: newPage });
      window.scrollTo(0, 0);
    },
    [setSearchParams]
  );

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleProductSubmit = async productData => {
    const formData = new FormData();
    Object.entries(productData).forEach(([key, value]) => {
      if (key !== 'file') {
        formData.append(key, value);
      }
    });
    formData.append('intent', 'create-product');

    try {
      // 첫 번째 요청: 데이터 전송 (이 부분은 Promise를 반환하지 않을 수 있습니다)
      submit(formData, { method: 'post' });

      if (productData.file) {
        const fileFormData = new FormData();
        fileFormData.append('title', productData.title);
        fileFormData.append('image', productData.file);

        const fileUploadResponse = await fetch(
          `${apiUrl}/api/images/uploadTicketImage`,
          {
            method: 'POST',
            body: fileFormData,
          }
        );

        if (!fileUploadResponse.ok) {
          throw new Error('Failed to upload image');
        }

        // 모든 작업이 완료된 후 리다이렉트
        handleModalClose();
        redirect('/product'); // useNavigate 훅을 통해 리다이렉트 처리
      }
    } catch (error) {
      console.error('Error during product submission:', error);
    }
  };

  return (
    <div className="bg-white min-h-screen py-12 px-20">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-col w-192">
          <TicketManagement
            tickets={tickets}
            totalPages={totalPages}
            currentPage={Number(pageNumber)}
            onPageChange={handlePageChange}
            navigate={navigate}
          />
          <div className="flex justify-start mt-4">
            <button
              onClick={handleModalOpen}
              className="text-3xl text-gray-500 hover:bg-gray-200 p-2 rounded-lg w-12"
              style={{ transition: 'background-color 0.1s ease' }}
            >
              +
            </button>
          </div>
        </div>
        <OrderManagement
          orders={orders}
          allChecked={allChecked}
          checkedOrders={checkedOrders}
          onCheckAll={handleCheckAll}
          onOrderCheck={handleOrderCheck}
          onApproveOrders={handleApproveOrders}
        />
      </div>
      {isModalOpen && (
        <AddProductModal
          onClose={handleModalClose}
          onSubmit={handleProductSubmit}
        />
      )}
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
    <div className="p-6 rounded-lg shadow-md flex-1 flex flex-col overflow-auto">
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
      <div className="flex-grow space-y-4">
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
          text="주문 승인하기"
          onClick={onApproveOrders}
        />
      </div>
    </div>
  );
}

function TicketItem({ item, navigate }) {
  const [showDialog, setShowDialog] = useState(false); // 삭제 확인 다이얼로그 상태 관리
  const submit = useSubmit();

  async function handleDelete() {
    const formData = new FormData();
    formData.append('intent', 'delete-product');
    formData.append('ticketId', item.ticketId);
    formData.append('title', item.title);
    submit(formData, { method: 'post' });

    const imageResponse = await fetch(
      `${apiUrl}/api/images/ticket/${item.title}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    if (imageResponse.ok) {
      const message = await imageResponse.text();
      if (message === '파일이 존재하지 않거나 이미 삭제되었습니다.') {
        console.log('이미지 파일이 이미 존재하지 않거나 삭제되었습니다.');
      }
      return redirect('/product'); // 이미지 삭제(또는 존재하지 않음) 및 리뷰 삭제 모두 성공
    } else {
      console.error('이미지 삭제 실패');
      return false; // 이미지 삭제 실패 시 false 반환
    }
  }

  return (
    <div className="bg-white p-4 rounded-md shadow flex justify-between">
      <h3 className="font-semibold text-xl">{item.title}</h3>
      <div className="space-x-4 flex">
        <PageEditIcon
          isClickable={true}
          onClick={() => {
            navigate(`edit/${item.ticketId}`, { state: { item } });
          }}
        />
        <TrashCanIcon
          isClickable={true}
          onClick={() => setShowDialog(true)} // 다이얼로그를 보여줌
        />
      </div>

      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              정말 삭제하시겠습니까?
            </h2>
            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowDialog(false)}
                className="px-4 py-2 bg-gray-200 rounded-lg"
              >
                취소
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-lg"
              >
                삭제
              </button>
            </div>
          </div>
        </div>
      )}
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
