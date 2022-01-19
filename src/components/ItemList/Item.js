import React from "react";
import { Link } from "react-router-dom";

const Item = ({ products }) => {
  return (
    <>
      <div id="card">
        <img src={products.img} alt="description" className="productImg" />
        <div className="infoContainer">
          <h4 className="cardTitle">{products.name}</h4>
          <h5 className="cardInfo">Price: ${products.price}</h5>
          <Link to={`/products/${products.id}`}>Details</Link>
        </div>
      </div>
    </>
  );
};

export default Item;
