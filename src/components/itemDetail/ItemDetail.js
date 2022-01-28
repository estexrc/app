import React from "react";
import ItemCount from "../ItemCountFile/ItemCount";
import Swal from "sweetalert2";
import { useContexto } from "../../Context/myContext";

const ItemDetail = ({ description }) => {
  const { addCartContext } = useContexto();

  const onAdd = (quantity) => {
    Swal.fire({
      icon: "success",
      text: "Successfully added to cart",
    });
    addCartContext(description, quantity);
  };
  return (
    <>
      <div id="detailCard">
        <div className="cardContainer">
          <img src={description.img} alt="description" className="productImg" />
          <div className="infoContainer ">
            <h4 className="cardTitle">{description.name}</h4>
            <h5 className="cardInfo">{description.description}</h5>
            <h5 className="cardPrice">Price: ${description.price}</h5>
            <ItemCount stock={description.stock} initial={1} onAdd={onAdd} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
