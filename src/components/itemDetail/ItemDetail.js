import React from "react";
import ItemCount from "../ItemCountFile/ItemCount";
import Swal from "sweetalert2";

const ItemDetail = ({ description }) => {
  const onAdd = () => {
    Swal.fire({
      icon: "success",
      text: "Successfully added to cart",
    });
  };
  return (
    <>
      <div id="card">
        <img src={description.img} alt="description" className="product-img" />
        <div className="info-container ">
          <h4 id="card-title">{description.nombre}</h4>
          <h5 className="card-info">Precio: ${description.precio}</h5>
          <h5 className="card-info">{description.descripcion}</h5>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
