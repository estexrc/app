import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useContexto } from "../myContext";

const Payment = () => {
  const { cart } = useContexto();

  const totalCount = cart.reduce(
    (acc, item) => acc + item.price * item.cantidad,
    0
  );

  const sendOrder = () => {
    const order = {
      buyer: {
        name: "Esteban",
        phone: "3413549436",
        email: "eauguadra@gmail.com",
      },
      items: { ...cart },
      date: serverTimestamp(),
      total: totalCount,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order);

    console.log("compra realizada");
  };

  return (
    <>
      <p>Aca se van a mostrar inputs para poner datos del cliente</p>
      <button onClick={sendOrder}>Finalizar compra</button>
    </>
  );
};

export default Payment;
