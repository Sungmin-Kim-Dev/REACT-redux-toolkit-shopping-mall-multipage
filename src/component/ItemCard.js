/* eslint-disable react/prop-types */
import React from "react";

const ItemCard = ({ item, itemCardClick }) => {
  return (
    <div className="group/item cursor-pointer shadow-lg" onClick={() => itemCardClick(item?.id)}>
      <img
        src={item?.img}
        alt=""
        className="mb-2 transition-all duration-300 group-hover/item:scale-105"
      />
      <div className="text-box space-y-1 p-4">
        <div className={`text-xs text-red-400 ${item?.choice ? "invisible" : ""}`}>
          Conscious Choice
        </div>
        <div className='text-xl font-medium'>{item?.title}</div>
        <div>\{item?.price.toLocaleString("ko-KR", "currency")}</div>
        <div className={`text-gray-500 text-sm ${item?.new ? "invisible" : ""}`}>NEW</div>
      </div>
    </div>
  );
};

export default ItemCard;
