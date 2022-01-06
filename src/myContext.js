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

  // const addCartContext = (item, quantity) => {
  //   const newCart = cart.slice();

  //   console.log(item, "de aca viene el item");

  //   const itemQuantity = { ...item, cantidad: quantity };

  //   let repeat = newCart.find((obj) => obj.id === item.id);

  //   console.log(itemQuantity, "este es itemQuantity");

  //   if (repeat) {
  //     repeat.cantidad = repeat.cantidad + quantity;
  //   } else {
  //     newCart.push(itemQuantity);
  //   }

  //   setCart(newCart);
  // };

  const addCartContext = (item, quantity) => {
    //agregar cantidad en producto
    const itemQuantity = { ...item, cantidad: quantity };

    //corroborar con some si el producto se encuentra en cart --
    const isInCart = cart.some((p) => p.id === item.id);
    if (!isInCart) {
      //se agrega el producto completo
      setCart([...cart, itemQuantity]);
    } else {
      //si encuentra el producto, se suma la cantidad
      const addQuantity = cart.find((prod) => prod.id === item.id);
      //guardo el prod para poder acceder a cantidad y sumar

      addQuantity.cantidad = addQuantity.cantidad + quantity;

      console.log(itemQuantity, "desde itemquantity");
      console.log(cart, "desde context");

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
