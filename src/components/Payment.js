import {
  collection,
  getFirestore,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useContexto } from "../myContext";
import { useState } from "react";
import Swal from "sweetalert2";

const Payment = () => {
  const { cart, setCart, totalCount } = useContexto();
  const [buyer, setBuyer] = useState({
    name: "",
    lastName: "",
    phoneNumber: "",
    email: "",
  });

  const completeBuyerInfo = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const sendOrder = () => {
    const order = {
      buyer: buyer,
      items: { ...cart },
      date: serverTimestamp(),
      total: totalCount,
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => {
      Swal.fire({
        icon: "success",
        text: `Purchase nro ${id} is complete!! Thank you for trusting us!`,
      });
    });

    setBuyer({ name: "", lastName: "", phoneNumer: "", email: "" });
    setCart([]);
  };

  return (
    <>
      <div id="paymentContainer">
        <p>We're almost done!!</p>
        <p>Please, complete your info</p>
        <form>
          <input
            type="text"
            name="name"
            value={buyer.name}
            placeholder="Name"
            className="paymentInput"
            onChange={completeBuyerInfo}
            required
          />
          <input
            type="text"
            name="lastName"
            value={buyer.lastName}
            placeholder="Last Name"
            className="paymentInput"
            onChange={completeBuyerInfo}
            required
          />
          <input
            type="text"
            name="email"
            value={buyer.email}
            placeholder="E-mail"
            className="paymentInput"
            onChange={completeBuyerInfo}
            required
          />
          <input
            type="number"
            name="phoneNumber"
            value={buyer.phoneNumber}
            placeholder="Phone Number"
            className="paymentInput"
            onChange={completeBuyerInfo}
            required
          />
          <button
            type="submit"
            onClick={sendOrder}
            disabled={
              !(
                buyer.name &&
                buyer.lastName &&
                buyer.phoneNumber &&
                buyer.email
              )
            }
          >
            Finalizar compra
          </button>
        </form>
      </div>
    </>
  );
};

export default Payment;
