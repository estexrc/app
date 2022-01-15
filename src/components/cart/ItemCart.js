import React from "react";

const ItemCart = ({ item, deleteOneProduct, deleteCart }) => {
  return (
    <>
      <div className="cartItem">
        <img src={item.img} alt="description" className="product-img" />
        <div className="info-container ">
          <h4 id="card-title">{item.name}</h4>
          <h5 className="card-info">{item.description}</h5>
          <h5 className="card-info">Unity price: ${item.price}</h5>
          <h5 className="card-info">Quantity: {item.cantidad}</h5>
          <h5 className="card-info">
            Total price: ${item.price * item.cantidad}
          </h5>
          <div id="cartButtonContainer">
            <button onClick={deleteOneProduct} className="cartButton">
              Delete 1
            </button>
            <button onClick={deleteCart} className="cartButton">
              Delete all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
