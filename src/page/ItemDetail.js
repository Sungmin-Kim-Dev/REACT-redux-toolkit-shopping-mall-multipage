import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteBtn from "../component/FavoriteBtn";

const ItemDetail = () => {
  const { id } = useParams();
  console.log("id:", id);
  const size = ["S", "M", "L"];
  const [selectedSize, setSelectedSize] = useState("");
  const [favorites, setFavorites] = useState(false);
  const addToFavorites = () => {
    favorites ? setFavorites(false) : setFavorites(true);
    console.log("favorite:", favorites);
  };
  return (
    <div className="col container mx-auto flex flex-col gap-4 sm:flex-row">
      <div className="flex-1">
        <div className="relative">
          <img
            src="https://noona-hnm.netlify.app/pattern-jacket.jpeg"
            alt="이름"
            className="w-full"
          />
          <FavoriteBtn
            addClassName="flex top-0 sm:hidden"
            favorites={favorites}
            addToFavorites={addToFavorites}
          />
        </div>
      </div>
      <div className="flex-1">
        <div className="relative mx-auto w-full px-4 sm:px-0 sm:pt-10 md:w-80 md:pt-16 lg:min-w-80 lg:max-w-md lg:pt-24">
          <div className="first-line flex gap-4 text-xs text-gray-400">
            <span className="">Conscious Choice</span>
            <span>New</span>
            <FavoriteBtn
            addClassName="lg:top-22 hidden sm:top-8 sm:flex md:top-14"
            favorites={favorites}
            addToFavorites={addToFavorites}
          />
          </div>
          <h2 className="text-xl font-semibold">벨티드 트윌 코트</h2>
          <p className="font-semibold text-red-500">
            ₩{(99900).toLocaleString()}
          </p>
          <div className="size-bo my-8 space-y-4">
            <h4>
              SELECTED SIZE: <span>{selectedSize}</span>
            </h4>
            <ul className="grid grid-cols-5">
              {size.map((size) => (
                <li
                  key={size}
                  className={`h-14 cursor-pointer content-center border ${selectedSize === size ? "border-slate-800" : ""} text-center hover:bg-slate-200`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <button className="w-full bg-zinc-800 py-3 text-xs text-white">
            ADD TO BAG
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
