/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ItemDetail from "./itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { getDoc, doc, collection } from "firebase/firestore";

const ItemDetailContainer = () => {
  let [desc, setDesc] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const prodCollection = collection(db, "products");
    const refDoc = doc(prodCollection, id);
    getDoc(refDoc)
      .then((snapshop) => {
        const id = snapshop.id;
        const data = snapshop.data();
        const producto = {
          id: id,
          ...data,
        };
        setDesc(producto);
        setLoading(false);
      })

      .catch((error) => {
        console.log(error, "error en IDC");
      });
  }, [id]);

  return (
    <>
      {loading ? (
        <div id="products-container">
          <h1 id="products-title">Our Stock Products</h1>
          <p>Loading products...</p>
        </div>
      ) : (
        <ItemDetail description={desc} />
      )}
    </>
  );
};

export default ItemDetailContainer;
