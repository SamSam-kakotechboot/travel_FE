import React, { useState, useEffect } from 'react';
import { getTotalPages, getCurrentItems } from '../utils/pagination';
import BlackButton from './BlackButton';
import Review from './Review';
import PageButtons from './PageButtons';
import reviewsData from '../testdata/review.json';

const Reviews = ({ id, onReviewButtonClick }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 5;

  const totalPages = getTotalPages(reviewsData, reviewsPerPage);
  const currentReviews = getCurrentItems(
    reviewsData,
    currentPage,
    reviewsPerPage
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);

  return (
    <div className="flex justify-center">
      <div className="reviews-container w-[1200px] mt-[36px]">
        {/* Header and Button Section */}
        <div className="flex items-center justify-between mb-[60px] ml-[18px] mr-[18px]">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-black mr-2">All Reviews</h2>
            <span className="text-gray-500 text-sm italic">
              ({reviewsData.length})
            </span>
          </div>
          <BlackButton
            width="166px"
            height="48px"
            text="리뷰 작성"
            onClick={onReviewButtonClick}
          />
        </div>

        {/* Reviews Content Section */}
        <div className="reviews-content flex flex-col items-center gap-4 p-6 rounded-lg">
          {currentReviews.map((review, index) => (
            <Review
              key={index}
              reviewer={review.name}
              score={review.rating}
              content={review.comment}
              date={new Date(review.regDate).toLocaleDateString()}
              imgUrl={'https://via.placeholder.com/265x170'}
            />
          ))}
        </div>

        <div className="flex justify-center mt-[80px] mb-[30px]">
          <PageButtons
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
