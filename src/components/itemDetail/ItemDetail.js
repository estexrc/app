import React from "react";

const ItemDetail = ({ description }) => {
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
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
