import React, { useEffect, useState } from "react";
import ItemCard from "../component/ItemCard";
import { useNavigate } from "react-router-dom";

const MainPage = ({ authenticate }) => {
  const navigate = useNavigate();
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    let url = `http://localhost:3004/products/`;
    let response = await fetch(url);
    let data = await response.json();
    // console.table(data);
    setProductList(data);
    console.table(productList);
    productList.map((i) => console.log(i.id));
  };
  const itemCardClick = (id) => {
    authenticate ? navigate(`/item/${id}`) : navigate("/login");
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div
      className="container mx-auto p-4 sm:p-6 lg:p-8"
      
    >
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {productList.map((item) => (
          <ItemCard key={item.id} item={item} itemCardClick={itemCardClick}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
