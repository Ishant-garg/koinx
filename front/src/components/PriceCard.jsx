import React from 'react';

const PriceCard = ({ title, value, isChange }) => {
  const isPositive = isChange && value >= 0;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-full md:w-1/3">
      <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
      <p
        className={`text-2xl font-bold ${
          isChange
            ? isPositive
              ? 'text-green-500'
              : 'text-red-500'
            : 'text-gray-800'
        }`}
      >
        {isChange ? `${value.toFixed(2)}%` : value}
      </p>
    </div>
  );
};

export default PriceCard;
