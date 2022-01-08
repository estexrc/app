import { Link } from "react-router-dom";
import { useContexto } from "../../myContext";
import ItemCart from "./ItemCart";

const Carrito = () => {
  const { cart, deleteCart, clearCart, deleteOneProduct } = useContexto();

  return (
    <>
      <h2 id="cartTitle">¡Hello! I'm your cart</h2>
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
          <button onClick={clearCart} className="bnt-Cart">
            Clear cart
          </button>
        ) : (
          <>
            <p id="cartEmptyMessage">Your cart is still empty...</p>
            <Link to="/producto">
              <button className="bnt-Cart">Go back to products</button>
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default Carrito;
// cantidad,
// return (
//   <div className="card-container">
//     <img src={desc.img} alt="description" className="product-img" />
//     <div className="info-container ">
//       <h4 id="card-title">{desc.nombre}</h4>
//       <h5 className="card-info">Precio: ${desc.precio}</h5>
//       <h5 className="card-info">{desc.descripcion}</h5>
//       <h5 className="card-info">Cantidad: {desc.cantidad}</h5>

//       <button onClick={deleteOneProduct}>-1</button>
//       <button onClick={deleteCart}>-</button>
//     </div>
//   </div>
// );
