import { createContext, useContext, useState } from "react";

const context = createContext();

export const { Provider } = context;

export const useContexto = () => {
  return useContext(context);
};

const CustomProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuan, setTotalQuan] = useState(0);

  const addCartContext = (item, quantity) => {
    const itemQuantity = { ...item, quantity: quantity };

    let newCart = [...cart];
    let repeat = newCart.find((obj) => obj.id === item.id);
    const price = item.price * quantity;

    if (repeat) {
      repeat.quantity = repeat.quantity + quantity;
      setCart(newCart);
      setTotalPrice(totalPrice + price);
      setTotalQuan(totalQuan + quantity);
    } else {
      setCart([...newCart, itemQuantity]);
      setTotalPrice(totalPrice + price);
      setTotalQuan(totalQuan + quantity);
    }
  };

  const deleteOneProduct = (i) => {
    const newCart = [...cart];
    let deleteOne = newCart.find((obj) => obj.id === i.id);

    if (deleteOne.quantity > 1) {
      deleteOne.quantity = deleteOne.quantity - 1;
      setCart(newCart);
      setTotalPrice(totalPrice - deleteOne.price);
      setTotalQuan(totalQuan - 1);
    } else {
      deleteCart(deleteOne);
    }
  };

  const deleteCart = (i) => {
    let deleteProduct = cart.filter((obj) => obj.id !== i.id);
    setCart(deleteProduct);
    setTotalPrice(totalPrice - i.quantity * i.price);
    setTotalQuan(totalQuan - i.quantity);
  };

  const clearCart = () => {
    setCart([]);
    setTotalPrice(0);
    setTotalQuan(0);
  };
  const valorDelContexto = {
    cart,
    setCart,
    totalPrice,
    totalQuan,
    setTotalQuan,
    addCartContext,
    deleteOneProduct,
    deleteCart,
    clearCart,
  };

  return <Provider value={valorDelContexto}>{children}</Provider>;
};

export default CustomProvider;
