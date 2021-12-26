/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ItemDetail from "./itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  let [desc, setDesc] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const url2 = "https://mocki.io/v1/cc6c33f2-a454-4135-8401-db1178c7220c";

  const consumeApi = async () => {
    const response = await fetch(url2);
    const responseJSON = await response.json();

    return responseJSON.filter((desc) => desc.id == id);
  };

  useEffect(() => {
    setTimeout(() => {
      consumeApi().then((res) => {
        setDesc(res);
        setLoading(false);
      });
    }, 2000);
  }, [id]);

  console.log(desc);

  if (loading) {
    return (
      <div id="products-container">
        <h1 id="products-title">Our Stock Products</h1>
        <p>Los productos se estan cargando...</p>
      </div>
    );
  } else {
    return <ItemDetail description={desc} />;
  }
};

export default ItemDetailContainer;
