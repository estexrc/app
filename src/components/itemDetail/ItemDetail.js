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
          <img src={description.img} alt="description" className="productImg" />
          <div className="infoContainer ">
            <h4 className="cardTitle">{description.name}</h4>
            <h5 className="cardInfo">Price: ${description.price}</h5>
            <h5 className="cardInfo">{description.descripcion}</h5>
            <ItemCount stock={description.stock} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
