import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
const PlaceOrder = () => {

  const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Informatii despre livrare</p>
        <div className="multi-fields">
          <input type="text" placeholder="Nume" />
          <input type="text" placeholder="Prenume"/>
        </div>
        <input type="email" placeholder="Email"/>
        <input type="text" placeholder="Strada"/>
        <div className="multi-fields">
          <input type="text" placeholder="Oras" />
          <input type="text" placeholder="Judet"/>
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Cod postal" />
          <input type="text" placeholder="Judet"/>
        </div>
        <input type="text" placeholder="Telefon" />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Total cos</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>Lei{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <hr />
              <p>Livrare</p>
              <p>Lei{2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
            <b>Total</b>
            <b>Lei{getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <button>Plateste</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
