import React from "react";

const ItemCard = () => {
  return (
    <div className="group/item cursor-pointer shadow-lg">
      <img
        src="https://noona-hnm.netlify.app/track-jacket.jpeg"
        alt=""
        className="mb-2 transition-all duration-300 group-hover/item:scale-105"
      />
      <div className="text-box p-4 space-y-1">
        <div className="text-xs">Conscious Choice</div>
        <div>Title</div>
        <div>Price</div>
        <div>new</div>
      </div>
    </div>
  );
};

export default ItemCard;
