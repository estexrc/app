import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const url = "https://fakestoreapi.com/products";

  let [products, setProducts] = useState([]);

  const fetchFakeStore = async () => {
    const response = await fetch(url); // `${URL_BASE}/${id}` hay q meter eso
    const responseJSON = await response.json();
    setProducts(responseJSON);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchFakeStore();
    }, 2000);
  }, []);

  return (
    <div id="products-container">
      <h1 id="products-title">Our Stock Products</h1>
      <ItemList prod={products} />
    </div>
  );
};

export default ItemListContainer;

// Quito onAdd por el momento
// import ItemCount from "./ItemCountFile/ItemCount";
