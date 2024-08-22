import React from "react";

const ItemCard = ({ item }) => {
  return (
    <div className="group/item cursor-pointer shadow-lg">
      <img
        src={item?.img}
        alt=""
        className="mb-2 transition-all duration-300 group-hover/item:scale-105"
      />
      <div className="text-box space-y-1 p-4">
        <div className={`text-xs ${item?.choice ? "invisible" : ""}`}>
          Conscious Choice
        </div>
        <div>{item?.title}</div>
        <div>\{item?.price.toLocaleString("ko-KR", "currency")}</div>
        <div className={`text-xs ${item?.new ? "invisible" : ""}`}>new</div>
      </div>
    </div>
  );
};

export default ItemCard;
