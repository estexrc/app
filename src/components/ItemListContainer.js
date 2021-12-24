/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  console.log(id);

  const url = "https://mocki.io/v1/93b6b749-83ca-4671-bdab-c96edc5c3663";

  const fetchFakeStore = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    if (id) {
      return products.filter((producto) => producto.categoria === id);
    } else {
      return responseJSON;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchFakeStore()
        .then((res) => {
          setProducts(res);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }, 2000);
  }, [id]);
  console.log(products);

  if (loading) {
    return (
      <div id="products-container">
        <h1 id="products-title">Our Stock Products</h1>
        <p>Los productos se estan cargando...</p>
      </div>
    );
  } else {
    return (
      <div id="products-container">
        <h1 id="products-title">Our Stock Products</h1>
        <ItemList prod={products} />
      </div>
    );
  }
};

export default ItemListContainer;

// Quito onAdd por el momento
// import ItemCount from "./ItemCountFile/ItemCount";

// const fetchFakeStore = async () => {
//   const response = await fetch(url); // `${URL_BASE}/${id}` hay q meter eso
//   const responseJSON = await response.json();
//   setProducts(responseJSON);
// };

// useEffect(() => {
//   setTimeout(() => {
//     fetchFakeStore();
//   }, 500);
// });
