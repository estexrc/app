import { createContext, useContext, useState } from "react";

const context = createContext();

export const { Provider } = context;

export const useContexto = () => {
  return useContext(context);
};

const CustomProvider = ({ children }) => {
  const [cantidad, setCantidad] = useState(0);

  const quantity = (el) => {
    setCantidad(cantidad + el);
  };

  const [cart, setCart] = useState([]);

  const addCartContext = (item, quantity) => {
    const itemQuantity = { ...item, cantidad: quantity };

    let repeat = cart.find((obj) => obj.id === item.id);

    console.log(itemQuantity, "este es itemQuantity");

    if (repeat) {
      repeat.cantidad = repeat.cantidad + quantity;
      setCart([...cart]);
      console.log(cart, "entro por if");
    } else {
      setCart([...cart, itemQuantity]);
      console.log(cart, "entro x else");
    }
  };

  const deleteOneProduct = (i) => {
    let deleteOne = cart.find((obj) => obj.cantidad > 1 && obj.id === i.id);

    if (deleteOne) {
      deleteOne.cantidad = deleteOne.cantidad - 1;
      const nuevaCantidad = { i, cantidad: deleteOne.cantidad };
      setCart([...cart]);
    }
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
    quantity,
    cantidad,
    cart,
    addCartContext,
    deleteOneProduct,
    deleteCart,
    clearCart,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
