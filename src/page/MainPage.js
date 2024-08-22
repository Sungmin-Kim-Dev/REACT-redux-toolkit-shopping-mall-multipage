import React, { useEffect, useState } from "react";
import ItemCard from "../component/ItemCard";

const MainPage = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:3000/products/`;
    let response = await fetch(url);
    let data = await response.json();
    // console.table(data);
    setProductList(data);
    console.table(productList);
    productList.map((i) => console.log(i.id));
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="container mx-auto mt-6 p-4 sm:p-6 lg:p-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productList.map((item) => (
          <ItemCard key={item.id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
