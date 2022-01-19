import { Link, NavLink } from "react-router-dom";
import { useContexto } from "../../myContext";
import ItemCart from "./ItemCart";

const Carrito = () => {
  const { cart, totalCount, deleteCart, clearCart, deleteOneProduct } =
    useContexto();

  return (
    <>
      <h2 id="cartTitle">Hello! I'm your cart</h2>
      <div id="cartContainer">
        {cart.map((desc) => (
          <ItemCart
            key={desc.id}
            item={desc}
            deleteOneProduct={() => deleteOneProduct(desc)}
            deleteCart={() => deleteCart(desc)}
          />
        ))}

        {cart.length > 0 ? (
          <div id="cartInfoFooter">
            <p id="totalPrice">Total Count: ${totalCount} </p>
            <div>
              <NavLink to={"/Payment"}>
                <button className="bnt-Cart">Finish buy</button>
              </NavLink>
              <button onClick={clearCart} className="bnt-Cart">
                Clear cart
              </button>
            </div>
          </div>
        ) : (
          <>
            <p id="cartEmptyMessage">Your cart is still empty...</p>
            <Link to="/products">
              <button className="bnt-Cart">Go back to products</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Carrito;
