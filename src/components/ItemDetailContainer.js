import { useState, useEffect } from "react";
import ItemDetail from "./itemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const url2 = "https://fakestoreapi.com/products/3";

  let [desc, setDesc] = useState([]);

  const consumeApi = async () => {
    const response = await fetch(url2);
    const responseJSON = await response.json();
    setDesc(responseJSON);
  };

  useEffect(() => {
    setTimeout(() => {
      consumeApi();
    }, 2000);
  }, []);

  return <ItemDetail description={desc} />;
};

export default ItemDetailContainer;
