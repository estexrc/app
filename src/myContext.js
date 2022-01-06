import { createContext, useContext, useState } from "react";

const context = createContext();

export const { Provider } = context;

export const useContexto = () => {
  return useContext(context);
};

const CustomProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(0);

  // const quantity = (el) => {
  //   setCantidad(cantidad + el);
  // };

  const [cart, setCart] = useState([]);

  const addCartContext = (item, quantity) => {
    const newCart = cart.slice();

    console.log(item, "de aca viene el item");

    const itemQuantity = { ...item, cantidad: quantity };

    let repeat = newCart.find((obj) => obj.id === item.id);

    console.log(itemQuantity, "este es itemQuantity");

    if (repeat) {
      repeat.cantidad = repeat.cantidad + quantity;
    } else {
      newCart.push(itemQuantity);
    }

    setCart(newCart);
  };

  const deleteCart = (i) => {
    let deleteProduct = cart.find((obj) => obj.id === i.id);
    let index = cart.indexOf(deleteProduct);
    cart.splice(index, 1);
    setCart([...cart]);
  };

  const clearCart = () => {
    setCart([]);
    setCantidad(0);
  };

  const valorDelContexto = {
    cantidad,
    // quantity,
    cart,
    addCartContext,
    deleteCart,
    clearCart,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
