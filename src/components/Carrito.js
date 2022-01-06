import { useContexto } from "../myContext";

const Carrito = () => {
  const { cart, cantidad, deleteCart, clearCart } = useContexto();

  return (
    <>
      <div id="card">
        {cart.map((desc) => {
          return (
            <div className="card-container">
              <img src={desc.img} alt="description" className="product-img" />
              <div className="info-container ">
                <h4 id="card-title">{desc.nombre}</h4>
                <h5 className="card-info">
                  Precio: $ {`${desc.precio}*${cantidad}`}
                </h5>
                <h5 className="card-info">{desc.descripcion}</h5>
                <button onClick={deleteCart}>-</button>
              </div>
            </div>
          );
        })}
      </div>
      <button onClick={clearCart}>Clear</button>
    </>
  );
};

export default Carrito;
