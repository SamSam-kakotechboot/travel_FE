// src/components/Review.js
import React from 'react';
import StarIcon from './icons/StarIcon';
import useFetchImage from '../hooks/useFetchImage';

const Review = ({ review }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const { imageSrc, loading, error } = useFetchImage(apiUrl, `api/images/review/${review.reviewId}`);

  const fullStars = Math.floor(review.rating);

  return (
    <div className="review-container flex w-[790px] h-[227px] p-6 rounded-[20px] border border-gray-100 bg-white">
      {/* Left Container */}
      <div className="left-container flex flex-col gap-[12px] flex-grow">
        {/* Star Section */}
        <div className="score-container flex items-center w-[107px] h-[25px] rounded-md overflow-hidden">
          {Array.from({ length: 5 }, (_, index) => (
            <div key={index} className="star">
              {index < fullStars ? (
                <StarIcon className="w-6 h-6 ml-[3px]" />
              ) : null}
            </div>
          ))}
        </div>
        {/* Review Section */}
        <div className="review-content flex flex-col h-full ml-[3px]">
          <div className="reviewer text-[14px] font-semibold mb-[8px]">
            {review.userName}
          </div>
          <div
            className="content text-[14px] w-[330px] mb-2"
            style={{ color: 'rgba(0, 0, 0, 0.60)' }}
          >
            {review.comment}
          </div>
          <div className="date text-sm text-gray-500 mt-auto">
            Posted on {new Date(review.regDate).toLocaleDateString()}
          </div>
        </div>
      </div>
      {/* Right Image Container */}
      <div className="image-container flex-shrink-0 ml-4">
        {loading && <p>Loading image...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && (
          <img
            className="w-[265px] h-[170px] rounded-2xl object-cover"
            src={imageSrc}
            alt="Review Image"
          />
        )}
      </div>
    </div>
  );
};

export default Review;
