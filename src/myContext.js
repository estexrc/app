import { createContext, useContext, useState } from "react";

const context = createContext();

export const { Provider } = context;

export const useContexto = () => {
  return useContext(context);
};

const CustomProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(0);
  const [cart, setCart] = useState([]);

  const quantity = () => {
    setCantidad(cantidad + 1);
    console.log(cantidad);
  };

  const addCartContext = (newElement) => {
    const newCart = cart.slice();

    newCart.push(newElement);

    setCart(newCart);
  };

  const deleteCart = (id) => {
    return console.log("hola");
  };

  const clearCart = () => {
    setCart([]);
  };

  const valorDelContexto = {
    cantidad,
    quantity,
    cart,
    addCartContext,
    deleteCart,
    clearCart,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;