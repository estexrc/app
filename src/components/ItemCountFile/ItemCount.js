import { useState } from "react";
import { Link } from "react-router-dom";
import "./itemCount.css";
import Swal from "sweetalert2";

const ItemCount = ({ stock, initial, onAdd }) => {
  let [contador, setContador] = useState(initial);
  let [buy, setBuy] = useState(false);

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

  const addCart = () => {
    setContador(initial);
    onAdd(contador);
    setBuy(true);
  };

  return (
    <div id="itemCount">
      <div id="contenedor-contador">
        <button onClick={sumar} className="bnt-Container">
          +
        </button>
        <p className="counter">{contador} </p>
        <button onClick={restar} className="bnt-Container">
          -
        </button>
      </div>
      <button className="add-cart" onClick={addCart}>
        Add Cart
      </button>
      {buy && (
        <button className="add-cart">
          <Link to="/Cart" style={{ color: "#000" }}>
            Go Cart
          </Link>
        </button>
      )}
    </div>
  );
};

export default ItemCount;
