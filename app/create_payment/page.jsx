"use client";

import React, { useState } from "react"
import { PaystackButton } from "react-paystack"


const App = () => {
  const publicKey = "pk_test_ea6fba45f769b68c74017a0896374653390e103c";
  const amount = 1000000
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
    },
    publicKey,
    text: "Pay Now",
    onSuccess: async () => {

      alert("Thanks for doing business with us! Come back soon!!")

      const res = await fetch("api/paystack", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          amount,
        }),
      });

    },
    onClose: () => alert("Wait! Don't leave :("),
  }

  return (
    <div className="App">

      <div className="container bg-yellow-500 p-10">

        <div className="item">
          <img alt="Item Image" src="./legitg.jpg" className="item-image"/>
          <div className="item-details">
            <p className="item-details__title">API Integration Services</p>
            <p className="item-details__amount">${amount}</p>
          </div>
        </div>

        <div className="checkout">

          <form className="checkout-form">

            <div className="checkout-field">
              <label>Name</label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="checkout-field">
              <label>Email</label>
              <input
                type="text"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="checkout-field">
              <label>Phone</label>
              <input
                type="text"
                id="phone"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

          </form>

          <PaystackButton {...componentProps} className="paystack-button"/>

        </div>

      </div>
    </div>
  )
}

export default App