import { useState } from "react";
import "./itemCount.css";
import Swal from "sweetalert2";
import { useContexto } from "../../myContext";

const ItemCount = ({ stock, initial, onAdd }) => {
  let [contador, setContador] = useState(initial);

  const { quantity, addCartContext } = useContexto();

  const sumar = () => {
    if (contador >= stock) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "We don't have stock of this product",
      });
    } else {
      setContador(contador + 1);
      quantity();
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

  const addCart = () => {
    setContador(initial);
    onAdd(contador);
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
      <button id="add-cart" onClick={addCart}>
        Add Cart
      </button>
    </>
  );
};

export default ItemCount;
