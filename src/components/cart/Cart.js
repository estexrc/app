import { Link, NavLink } from "react-router-dom";
import { useContexto } from "../../Context/myContext";
import ItemCart from "./ItemCart";

const Cart = () => {
  const { cart, totalPrice, deleteCart, clearCart, deleteOneProduct } =
    useContexto();

  return (
    <>
      <h3 className="titleForContainers">Hello! I'm your cart</h3>
      <div id="cartContainer">
        {cart.map((desc) => (
          <ItemCart
            key={desc.id}
            item={desc}
            deleteOneProduct={() => deleteOneProduct(desc)}
            deleteCart={() => deleteCart(desc, desc.cantidad, desc.price)}
          />
        ))}

        {cart.length > 0 ? (
          <div id="cartInfoFooter">
            <p id="totalPrice">Total Count: ${totalPrice} </p>
            <div>
              <NavLink to={"/Payment"}>
                <button className="bntCart">Buy</button>
              </NavLink>
              <button onClick={clearCart} className="bntCart">
                Clear cart
              </button>
            </div>
          </div>
        ) : (
          <>
            <p id="cartEmptyMessage">Your cart is still empty...</p>
            <Link to="/products">
              <button className="bntCart">Go back to products</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
