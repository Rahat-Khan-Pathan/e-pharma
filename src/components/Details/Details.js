import React, { useState } from "react";
import { useParams } from "react-router";
import useFakeData from "../../hooks/useFakeData";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const { data } = useFakeData();
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Finding the selected product using dynamic id 
  const detailsData = data.find((dt) => dt.id === id);
  const { name, type, image, company, price, description } = detailsData || {
    name: "",
    type: "",
    image: "",
    company: "",
    price: "",
    description: "",
  };

  const { addToCart } = useLocalStorage();

  // Add to local storage 
  const add = () => {
    if (quantity <= 0) {
      setError("Invalid quantity");
    } else {
      addToCart(id, quantity);
      setError("");
      setSuccess("Added to cart");
    }
  };

  // Quantity plus 
  const plus = () => {
    setQuantity(quantity + 1);
    setSuccess("");
  };
  // Quantity minus 
  const minus = () => {
    if (quantity > 1) setQuantity(quantity - 1);
    setSuccess("");
  };
  const change = (e) => {
    setQuantity(parseInt(e.target.value));
    setSuccess("");
  };

  return (
    <div className="container details-container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="card mb-3" style={{ maxWidth: "500px" }}>
          <div className="row g-0">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8 d-flex align-items-center">
              <div className="card-body">
                <h5 className="card-title mb-2">{name}</h5>
                <p className="card-type">{type}</p>
                <p className="card-company mb-4">{company}</p>
                <h5 className="card-price mb-4">৳ {price}</h5>
                <div className="mb-3 d-flex align-items-center">
                  <button
                    onClick={minus}
                    className="btn btn-success details-btn me-1"
                  >
                    {" "}
                    <i className="fas fa-minus-square"></i>{" "}
                  </button>
                  <input
                    onChange={change}
                    type="number"
                    name="number"
                    id="quantity-input"
                    value={quantity}
                  />
                  <button
                    onClick={plus}
                    className="btn btn-danger details-btn ms-1"
                  >
                    {" "}
                    <i className="fas fa-plus-square"></i>{" "}
                  </button>
                </div>
                <button
                  onClick={add}
                  className="btn btn-outline-success details-btn"
                >
                  {" "}
                  <i className="fas fa-shopping-cart"></i> ADD TO CART
                </button>
                <br />
                <span className="success">
                  {"\u00A0"}
                  {success}
                </span>
                <span className="error">{error}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="mt-4 px-4 py-2">
            <p className="fw-normal details">
              <span className="fw-bold">Details:</span> {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
