/* eslint-disable react/prop-types */
import React, { useEffect } from "react";
import ItemCard from "../component/ItemCard";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/reducers/ProductSlice";

const MainPage = () => {
  const productList = useSelector((state) => state.product.productList);
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const searchQuery = query.get("q") || "";
    dispatch(fetchProducts(searchQuery));
  }, [query]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productList.map((item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
