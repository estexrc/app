import React from "react";
import { Link } from "react-router-dom";

const Item = ({ products }) => {
  return (
    <>
      <div id="card">
        <img src={products.img} alt="description" className="product-img" />
        <div className="info-container">
          <h4 id="card-title">{products.name}</h4>
          <h5 className="card-info">Price: ${products.price}</h5>
          <Link to={`/products/${products.id}`}>Details</Link>
        </div>
      </div>
    </>
  );
};

export default Item;
