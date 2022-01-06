import { createContext, useContext, useState } from "react";

const context = createContext();

export const { Provider } = context;

export const useContexto = () => {
  return useContext(context);
};

const CustomProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(0);
  const [cart, setCart] = useState([]);

  const quantity = (el) => {
    setCantidad(cantidad + el);
  };

  const addCartContext = (newElement) => {
    const newCart = cart.slice();

    if (itemRepeat) {
    } else {
      newCart.push(newElement);
      setCart(newCart);
    }
  };

  const deleteCart = (id) => {
    return console.log("hola");
  };

  const clearCart = () => {
    setCart([]);
    setCantidad(0);
  };

  const itemRepeat = (item) => {
    let repeat = cart.find((obj) => obj.id === item.id);

    if (repeat) {
      return true;
    } else {
      return false;
    }
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
