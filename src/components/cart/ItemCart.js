import React from "react";

const ItemCart = ({ item, deleteOneProduct, deleteCart }) => {
  return (
    <>
      <div className="cartItem">
        <img src={item.img} alt="description" className="productImg" />
        <div className="infoContainer ">
          <h4 className="cardTitle">{item.name}</h4>
          <h5 className="cardInfo">{item.description}</h5>
          <h5 className="cardInfo">Unity price: ${item.price}</h5>
          <h5 className="cardInfo">Quantity: {item.cantidad}</h5>
          <h5 className="cardInfo">
            Total price: ${item.price * item.cantidad}
          </h5>
          <div id="cartButtonContainer">
            <button
              onClick={deleteOneProduct}
              className="cartButtonForDeleteItems"
            >
              Delete 1
            </button>
            <button onClick={deleteCart} className="cartButtonForDeleteItems">
              Delete all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCart;
