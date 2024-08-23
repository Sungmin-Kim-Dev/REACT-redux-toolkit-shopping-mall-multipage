import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FavoriteBtn from "../component/FavoriteBtn";

const ItemDetail = () => {
  const { id } = useParams();
  const [selectedSize, setSelectedSize] = useState("");
  const [favorites, setFavorites] = useState(false);
  const addToFavorites = () => {
    favorites ? setFavorites(false) : setFavorites(true);
    // console.log("favorite:", favorites);
  };
  const [item, setItem] = useState();
  const getItemDetail = async () => {
    // const url = `http://localhost:3004/products/${id}`;
    const url = `https://my-json-server.typicode.com/Sungmin-Kim-Dev/REACT-shopping-mall-multipage/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setItem(data);
  };

  useEffect(() => {
    getItemDetail();
  }, []);
  return (
    <div className="col container mx-auto mb-20 flex flex-col gap-4 sm:flex-row">
      <div className="flex-1">
        <div className="relative mx-4 sm:mx-0">
          <img src={item?.img} alt={item?.title} className="w-full" />
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
            <span className={item?.choice ? "hidden" : ""}>
              Conscious Choice
            </span>
            <span className={item?.new ? "hidden" : ""}>New</span>
            <FavoriteBtn
              addClassName="lg:top-22 hidden sm:top-8 sm:flex md:top-14"
              favorites={favorites}
              addToFavorites={addToFavorites}
            />
          </div>
          <h2 className="text-2xl font-semibold">{item?.title}</h2>
          <p className="font-semibold text-red-500">
            ₩{item?.price.toLocaleString("ko-KR", "currency")}
          </p>
          <div className="size-bo my-8 space-y-4">
            <h4>
              SELECTED SIZE: <span>{selectedSize}</span>
            </h4>
            <ul className="grid grid-cols-5">
              {item?.size.map((s) => (
                <li
                  key={s}
                  className={`h-14 cursor-pointer content-center border ${selectedSize === s ? "border-slate-800" : ""} text-center hover:bg-slate-200`}
                  onClick={() => setSelectedSize(s)}
                >
                  {s}
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
