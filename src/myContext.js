import { createContext, useContext, useState } from "react";

const context = createContext();

export const { Provider } = context;

export const useContexto = () => {
  return useContext(context);
};

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCartContext = (item, quantity) => {
    const itemQuantity = { ...item, cantidad: quantity };

    let newCart = [...cart];
    let repeat = newCart.find((obj) => obj.id === item.id);

    if (repeat) {
      repeat.cantidad = repeat.cantidad + quantity;
      setCart(newCart);
    } else {
      setCart([...newCart, itemQuantity]);
    }
  };

  const deleteOneProduct = (i) => {
    const newCart = [...cart];
    let deleteOne = newCart.find((obj) => obj.cantidad > 1 && obj.id === i.id);

    if (deleteOne) {
      deleteOne.cantidad = deleteOne.cantidad - 1;
      const nuevaCantidad = { i, cantidad: deleteOne.cantidad };
      setCart(newCart);
    }
  };

  const deleteCart = (i) => {
    let deleteProduct = cart.filter((obj) => obj.id !== i.id);
    setCart(deleteProduct);
  };

  const clearCart = () => {
    setCart([]);
  };

  const valorDelContexto = {
    cart,
    addCartContext,
    deleteOneProduct,
    deleteCart,
    clearCart,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
