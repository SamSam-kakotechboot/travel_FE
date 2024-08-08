import React from 'react';
import StarIcon from './icons/StarIcon';
import HalfStarIcon from './icons/HalfStarIcon';

export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-[2px]">
      {[...Array(fullStars)].map((_, i) => (
        <StarIcon key={i} />
      ))}
      {halfStar && <HalfStarIcon />}
    </div>
  );
}
