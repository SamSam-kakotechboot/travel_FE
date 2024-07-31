import React from 'react';
import BlackButton from './BlackButton';
import Review from './Review';
import PageButtons from './PageButtons';

const Reviews = ({ id, onReviewButtonClick }) => {
  return (
    <div className="flex justify-center">
      <div className="reviews-container w-[1200px] mt-[36px]">
        {/* Header and Button Section */}
        <div className="flex items-center justify-between mb-[60px] ml-[18px] mr-[18px]">
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-black mr-2">All Reviews</h2>
            <span className="text-gray-500 text-sm italic">(51)</span>
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
          <Review
            reviewer={'ddd'}
            score={3.5}
            content={
              '너무 재밌었어요~~ 어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고어쩌고저쩌고'
            }
            date={'2023.03.03'}
            imgUrl={'https://via.placeholder.com/265x170'}
          />
          <Review
            reviewer={'John Doe'}
            score={4.0}
            content={
              'Great product! Very satisfied with the quality and performance.'
            }
            date={'2024.07.29'}
            imgUrl={'https://via.placeholder.com/265x170'}
          />
          <Review
            reviewer={'Jane Smith'}
            score={5.0}
            content={'Excellent service and fast delivery. Highly recommend!'}
            date={'2024.07.28'}
            imgUrl={'https://via.placeholder.com/265x170'}
          />
        </div>

        <div className="flex justify-center mt-[80px] mb-[30px]">
          <PageButtons />
        </div>
      </div>
    </div>
  );
};

export default Reviews;
