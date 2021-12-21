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
        <img
          src={description.image}
          alt="description"
          className="product-img"
        />
        <div className="info-container ">
          <h4 id="card-title">{description.title}</h4>
          <h5 className="card-info">Price: ${description.price}</h5>
          <h5 className="card-info">{description.description}</h5>
          <ItemCount stock={5} initial={1} onAdd={onAdd} />
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
