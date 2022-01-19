/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import ItemList from "../ItemList/ItemList";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDocs, query, collection, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    const prodCollection = collection(db, "products");
    const consumeFiBa = (info) => {
      getDocs(info)
        .then((resultado) => {
          const docs = resultado.docs;
          const lista = docs.map((doc) => {
            const id = doc.id;
            const data = doc.data();
            const producto = {
              id: id,
              ...data,
            };
            return producto;
          });
          setProducts(lista);
          setLoading(false);
        })
        .catch((err) => {
          Swal.fire({
            icon: "warning",
            text: "Something is not working, please try again",
          });
        });
    };

    if (!name) {
      consumeFiBa(prodCollection);
    } else {
      let consulta = query(prodCollection, where("category", "==", name));
      consumeFiBa(consulta);
    }
  }, [name]);

  return (
    <>
      {loading ? (
        <div className="productsContainer">
          <h3 className="titleForContainers">Loading our Stock Products...</h3>
        </div>
      ) : (
        <div className="productsContainer">
          <h3 className="titleForContainers">Our Stock Products</h3>
          <ItemList prod={products} />
        </div>
      )}
    </>
  );
};

export default ItemListContainer;
