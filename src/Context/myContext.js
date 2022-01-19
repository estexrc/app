import { createContext, useContext, useState } from "react";

const context = createContext();

export const { Provider } = context;

export const useContexto = () => {
  return useContext(context);
};

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const totalCount = cart.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

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
    let deleteOne = newCart.find((obj) => obj.id === i.id);

    if (deleteOne.cantidad > 1) {
      deleteOne.cantidad = deleteOne.cantidad - 1;
      setCart(newCart);
    } else {
      deleteCart(deleteOne);
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
    setCart,
    totalCount,
    addCartContext,
    deleteOneProduct,
    deleteCart,
    clearCart,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
