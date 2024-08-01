import React from 'react';
import StarIcon from './icons/StarIcon';
import HalfStarIcon from './icons/HalfStarIcon';
import disneylandReviewImage from '../assets/disneyland_review.png';

const Review = ({ reviewer, score, content, date, imgUrl }) => {
  const fullStars = Math.floor(score);
  const hasHalfStar = score - fullStars >= 0.5;

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
              ) : index === fullStars && hasHalfStar ? (
                <HalfStarIcon className="w-6 h-6" />
              ) : null}
            </div>
          ))}
        </div>
        {/* Review Section */}
        <div className="review-content flex flex-col h-full ml-[3px]">
          <div className="reviewer text-[14px] font-semibold mb-[8px]">
            {reviewer}
          </div>
          <div
            className="content text-[14px] w-[330px] mb-2"
            style={{ color: 'rgba(0, 0, 0, 0.60)' }}
          >
            {content}
          </div>
          <div className="date text-sm text-gray-500 mt-auto">
            Posted on {date}
          </div>
        </div>
      </div>
      {/* Right Image Container */}
      <div className="image-container flex-shrink-0 ml-4">
        <img
          className="w-[265px] h-[170px] rounded-2xl object-cover"
          src={disneylandReviewImage}
          alt="Disneyland Review"
        />
      </div>
    </div>
  );
};

export default Review;
