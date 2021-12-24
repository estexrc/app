/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ItemDetail from "./itemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  let [desc, setDesc] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  const url2 = "https://mocki.io/v1/93b6b749-83ca-4671-bdab-c96edc5c3663";

  const consumeApi = async () => {
    const response = await fetch(url2);
    const responseJSON = await response.json();
    if (id) {
      return desc.filter((desc) => desc.id === id);
    } else {
      return responseJSON;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      consumeApi().then((res) => {
        setDesc(res);
        setLoading(false);
      });
    }, 2000);
    console.log(desc);
  }, [id]);

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
