import React, { useEffect, useState } from "react";
import useFakeData from "../../hooks/useFakeData";
import useLocalStorage from "../../hooks/useLocalStorage";
import SingleCart from "../SingleCart/SingleCart";
import "./Cart.css";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const { data } = useFakeData();
  const { localData } = useLocalStorage();

  const keys = Object.keys(localData);

  // Change Title
  useEffect(() => {
    document.title = "E Pharma | Cart";
  }, []);

  // To show the selected products from local storage
  useEffect(() => {
    if (keys.length && data.length) {
      const newData = keys.map((key) => {
        const lt = data.find((dt) => dt.id === key);
        lt.quantity = localData[key];
        return lt;
      });
      setCart(newData);
    }
  }, [data]);

  // Getting total cost
  const total = cart
    ?.reduce(
      (total, ct) => total + parseFloat(ct.price) * parseFloat(ct.quantity),
      0
    )
    .toFixed(2);

  return (
    <div className="container details-container">
      <div className="row px-3">
        <div className="col-7 d-flex flex-column justify-content-center align-items-center">
          {cart.length === 0 ? (
            <div className="empty-card">
              <h4 className="empty">Empty Cart</h4>
            </div>
          ) : (
            cart?.map((ct) => (
              <SingleCart
                key={ct.id}
                data={ct}
                setCart={setCart}
                cart={cart}
              ></SingleCart>
            ))
          )}
        </div>
        <div className="card col-5 h-100">
          <div className="py-4 px-1">
            <h4 className="text-center fw-bolder cart-summary">Summary</h4>
            <p className="cart-length">
              {" "}
              <span className="fw-bold">Total Products: </span>{" "}
              <span className="summary-sp">{cart.length}</span>{" "}
            </p>
            <p className="cart-price">
              {" "}
              <span className="fw-bold">Total Money:</span>{" "}
              <span className="summary-sp">৳{total}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
