/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import ItemCard from "../component/ItemCard";
import { useSearchParams } from "react-router-dom";

const MainPage = () => {
  const [productList, setProductList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    const searchQuery = query.get("q") || "";
    console.log(searchQuery);
    // const url = `http://localhost:3004/products/?q=${searchQuery}`;
    const url = `https://my-json-server.typicode.com/Sungmin-Kim-Dev/REACT-shopping-mall-multipage/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    setProductList(data);
    console.table(productList);
    // productList.map((i) => console.log(i.id));
  };

  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productList.map((item) => (
          <ItemCard key={item.id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
