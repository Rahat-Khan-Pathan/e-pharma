import React from "react";
import useFakeData from "../../hooks/useFakeData";
import Medicine from "../Medicine/Medicine";
import "./Medicines.css";

const Medicines = () => {
  const { data } = useFakeData();
  return (
    <div className="container medicines-container" id="medicines">
      <div className="d-flex justify-content-center">
        <h2 className="medicines-header mb-4">Medicines</h2>
      </div>
      <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3 g-2 g-lg-4">
        {data.map((dt) => (
          <Medicine key={dt.id} data={dt}></Medicine>
        ))}
      </div>
    </div>
  );
};

export default Medicines;
