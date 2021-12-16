import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";

const ItemListContainer = () => {
  const url = "https://fakestoreapi.com/products";

  let [products, setProducts] = useState([]);

  const fetchFakeStore = async () => {
    const response = await fetch(url);
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

// Utilizo fakestore por ende quito array de objetosetInterval(() => {

// }, const products = [
//   { id: 1, name: "French Fries", price: "$2", stock: 10 },
//   { id: 2, name: "Soda", price: "$1.5", stock: 0 },
//   { id: 3, name: "Cheese Burger", price: "$3", stock: 5 },
// ];);
