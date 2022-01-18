import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useContexto } from "../myContext";

const Payment = () => {
  const { cart, totalCount } = useContexto();

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
      <div id="paymentContainer">
        <p>Aca se van a mostrar inputs para poner datos del cliente</p>
        <input type="text" placeholder="Name" className="paymentInput"></input>
        <input
          type="text"
          placeholder="Last Name"
          className="paymentInput"
          required
        ></input>
        <input
          type="text"
          placeholder="E-mail"
          className="paymentInput"
          required
        ></input>
        <input
          type="text"
          placeholder="Phone Number"
          className="paymentInput"
          required
        ></input>
        <input
          type="text"
          placeholder="Direction"
          className="paymentInput"
          required
        ></input>
        <button onClick={sendOrder}>Finalizar compra</button>
      </div>
    </>
  );
};

export default Payment;
