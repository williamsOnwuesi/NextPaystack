"use client";

import { useState } from "react";

export default function Home() {

  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {

    e.preventDefault();

    console.log("Email: ", email);
    console.log("Message: ", amount);

    const res = await fetch("api/contacts", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        amount,
      }),
    });

    const { msg, success } = await res.json();

    setError(msg);
    setSuccess(success);

    if (success) {
      setEmail("");
      setAmount("");
    }
  };

  return (
    <>

  <div className="test">

    <div className="relative min-h-screen w-full bg-[url('../public/legitg.jpg')] bg-cover bg-no-repeat">
      <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
      <div className="grid min-h-screen px-8">
        <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">

          <div>
              <a href="/create_payment">
                <button className="p-6 m-5 bg-green-600 text-white">
                  Book API Integration Service
                </button>
              </a>
          </div>

        </div>
      </div>
    </div>

  </div>


      <form
        onSubmit={handleSubmit}
        className="py-4 mt-4 border-t flex flex-col gap-5"
      >

        <div>
          <label htmlFor="email">Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="text"
            className="h-10"
            id="email"
            placeholder="john@gmail.com"
          />
        </div>

        <div>
          <label htmlFor="message">Amount</label>
          <input
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            type="text"
            className="h-10"
            id="amount"
            placeholder="enter amount to pay here ..."
          />
        </div>

        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />
        </div>

        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />
        </div>

        <button className="bg-green-700 p-3 text-white font-bold" type="submit">
          Create Account
        </button>

      </form>


      <div className="bg-slate-100 flex flex-col">
        {error &&
          error.map((e) => (
            <div
              className={`${
                success ? "text-green-800" : "text-red-600"
              } px-5 py-2`}
            >
              {e}
            </div>
          ))}
      </div>

    </>
  );

}
 