import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const SingleCart = (props) => {
  const { id, name, type, image, company, quantity } = props.data;
  const { removeFromCart } = useLocalStorage();

  // Remove from local storage 
  const remove = ()=> {
      removeFromCart(id);
      const newCart = props.cart.filter(ct=> ct.id !== id);
      props.setCart(newCart);
  }

  return (
    <div className="">
      <div className="card mb-3" style={{ maxWidth: "600px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <div className="d-flex align-items-center justify-content-center">
              <img src={image} className="img-fluid rounded-start" alt="..." />
            </div>
          </div>
          <div className="col-md-8 d-flex align-items-center text-center">
            <div className="card-body d-flex justify-content-center flex-column align-items-center">
              <h5 className="card-title mb-1">{name}</h5>
              <p className="card-type">{type}</p>
              <p className="card-company company">{company}</p>
              <p className="card-quantity mb-4 text-success fw-bold">
                Quantity: {quantity}
              </p>
              <button onClick={remove} className="btn btn-outline-dark remove-btn">REMOVE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCart;
