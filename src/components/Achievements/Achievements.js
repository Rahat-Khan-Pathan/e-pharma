import React from "react";
import SingleDelivery from "../SingleDelivery/SingleDelivery";
import "./Achievements.css";

const Achievements = () => {
  return (
    <section className="container delivery-container">
      <div className="d-flex justify-content-center">
        <h2 className="delivery-header mb-4">Our Achievements</h2>
      </div>
      <div className="row row-cols-2 row-cols-md-3 row-cols-lg-4 gy-2 gx-2 gy-md-4 gx-md-4">
        <SingleDelivery
          img={
            "https://cdn.osudpotro.com/project_assets/registered-user-min.webp?w=256"
          }
          value={"102195"}
          text={"Registered Users"}
        ></SingleDelivery>
        <SingleDelivery
          img={
            "https://cdn.osudpotro.com/project_assets/average-delivery-time-min.webp?w=256"
          }
          value={"45min"}
          text={"Avg. Delivery Time"}
        ></SingleDelivery>
        <SingleDelivery
          img={
            "https://cdn.osudpotro.com/project_assets/total-items-min.webp?w=256"
          }
          value={"17095"}
          text={"Enlisted Items"}
        ></SingleDelivery>
        <SingleDelivery
          img={
            "https://cdn.osudpotro.com/project_assets/order-delivered-min.webp?w=256"
          }
          value={"34970"}
          text={"Orders Delivered"}
        ></SingleDelivery>
      </div>
    </section>
  );
};

export default Achievements;
