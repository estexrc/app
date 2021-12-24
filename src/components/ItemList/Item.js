import React from "react";
import { Link } from "react-router-dom";

const Item = ({ products }) => {
  return (
    <>
      <div id="card">
        <img src={products.img} alt="description" className="product-img" />
        <div className="info-container">
          <h4 id="card-title">{products.nombre}</h4>
          <h5 className="card-info">Price: ${products.precio}</h5>
          <Link to={`/producto/${products.id}`}>Detalle</Link>
        </div>
      </div>
    </>
  );
};

export default Item;
