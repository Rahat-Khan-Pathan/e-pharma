import React from "react";
import "./OrderDetails.css";

const OrderDetails = () => {
  return (
    <div className="container order-container">
      <div className="d-flex justify-content-center">
        <h2 className="medicines-header mb-4">How To Order</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 about-row px-2 gx-4 gy-4 gx-sm-2 gy-sm-2">
        <div className="col d-flex flex-column justify-content-center align-items-center card px-1 py-3">
          <div className="mb-0">
            <ul className="mb-0">
              <li className="mb-2 order-text">
                Before Placing An order You Have to sign up to our app with your
                email address , After sign up you can place your order
              </li>
              <li className="mb-2 order-text">
                Add all of your medicine to your cart
              </li>
              <li className="order-text">
                Place your order and get delivered at door steps
              </li>
            </ul>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img src="/order.svg" className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
