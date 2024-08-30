import { getAllProducts, getSingleItem } from "../reducers/ProductReducer";

const getProducts = (searchQuery) => {
  return async (dispatch) => {
    // const url = `http://localhost:3004/products/?q=${searchQuery}`;
    const url = `https://my-json-server.typicode.com/Sungmin-Kim-Dev/REACT-thunk-shopping-mall-multipage/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getAllProducts({ data }));
  };
};

const getItemDetail = (id) => {
  return async (dispatch) => {
    // const url = `http://localhost:3004/products/${id}`;
    const url = `https://my-json-server.typicode.com/Sungmin-Kim-Dev/REACT-thunk-shopping-mall-multipage/products/${id}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch(getSingleItem({ data }));
  };
};

export default { getProducts, getItemDetail };
