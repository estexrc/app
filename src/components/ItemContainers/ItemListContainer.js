/* eslint-disable eqeqeq */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
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
      getDocs(info).then((resultado) => {
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

/* 

  const { id } = useParams();

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
    }, 1000);
  }, [id]);

  */
