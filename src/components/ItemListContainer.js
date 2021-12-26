/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ItemList from "./ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  console.log(id);

  const url = "https://mocki.io/v1/cc6c33f2-a454-4135-8401-db1178c7220c";

  const fetchFakeStore = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    if (id) {
      return responseJSON.filter((producto) => producto.categoria == id);
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
