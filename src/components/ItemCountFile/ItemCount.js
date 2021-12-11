import { useState } from "react";
import "./itemCount.css";
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial }) => {
  let [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador >= stock) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "We don't have stock of this product",
      });
    } else {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador <= 1) {
      Swal.fire({
        icon: "warning",
        text: "1 is the minimun quantity",
      });
    } else {
      setContador(contador - 1);
    }
  };

  const onAdd = () => {
    if (stock <= 0) {
    } else {
      Swal.fire({
        icon: "success",
        text: "Successfully added to cart",
      });
    }
  };

  return (
    <>
      <div id="contenedor-contador">
        <button onClick={sumar} className="bnt-Container">
          +
        </button>
        <p className="counter">{contador} </p>
        <button onClick={restar} className="bnt-Container">
          -
        </button>
      </div>
      <button id="add-cart" onClick={onAdd}>
        Add Cart
      </button>
    </>
  );
};

export default ItemCount;
