import React from "react";
import "./SingleDelivery.css";

const SingleDelivery = (props) => {
  return (
    <div className="col">
      <div className="card delivery-card delivery-card h-100">
        <div className="d-flex justify-content-center">
          <img src={props.img} className="delivery-img" alt="" />
        </div>
        <div className="card-body text-center">
          <h3 className="delivery-value">{props.value}</h3>
          <p className="delivery-text">{props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleDelivery;
