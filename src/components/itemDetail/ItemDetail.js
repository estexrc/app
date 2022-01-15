import React from "react";
import ItemCount from "../ItemCountFile/ItemCount";
import Swal from "sweetalert2";
import { useContexto } from "../../myContext";

const ItemDetail = ({ description }) => {
  const { addCartContext } = useContexto();

  const onAdd = (cantidad) => {
    Swal.fire({
      icon: "success",
      text: "Successfully added to cart",
    });
    addCartContext(description, cantidad);
  };
  return (
    <>
      <div id="card">
        <div className="card-container">
          <img
            src={description.img}
            alt="description"
            className="product-img"
          />
          <div className="info-container ">
            <h4 id="card-title">{description.name}</h4>
            <h5 className="card-info">Precio: ${description.price}</h5>
            <h5 className="card-info">{description.descripcion}</h5>
            <ItemCount stock={description.stock} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
