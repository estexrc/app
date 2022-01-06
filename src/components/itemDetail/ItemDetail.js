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
    console.log(description);
  };
  return (
    <>
      <div id="card">
        {description.map((desc) => {
          return (
            <div className="card-container">
              <img src={desc.img} alt="description" className="product-img" />
              <div className="info-container ">
                <h4 id="card-title">{desc.nombre}</h4>
                <h5 className="card-info">Precio: ${desc.precio}</h5>
                <h5 className="card-info">{desc.descripcion}</h5>
                <ItemCount stock={5} initial={1} onAdd={onAdd} />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ItemDetail;
