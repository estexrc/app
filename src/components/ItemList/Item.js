import React from "react";

const Item = ({ title, price, img }) => {
  return (
    <>
      <div id="card">
        <img src={img} alt="description" className="product-img" />
        <div className="info-container">
          <h4 id="card-title">{title}</h4>
          <h5 className="card-info">Price: ${price}</h5>
        </div>
      </div>
    </>
  );
};

export default Item;
