import React from "react";
import { Link } from "react-router-dom";
import "./Medicine.css";

const Medicine = (props) => {
  const { id, name, type, image, company, price } = props.data;
  return (
    <div className="col">
      <div className="card home-card h-100">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={image}
            className="card-img-top medicine-card-img w-100"
            alt="..."
          />
        </div>
        <div className="card-body d-flex flex-column justify-content-end align-items-center h-50 px-1 py-2">
          <h5 className="card-title">{name}</h5>
          <p className="card-type">{type}</p>
          <p className="card-company company">{company}</p>
          <h5 className="card-price">৳ {price}</h5>
          <Link to={`/medicine/${id}`}>
            <button className="btn btn-outline-dark details-btn">
              {" "}
              <i className="fas fa-info-circle"></i> Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Medicine;
