import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="my-slider" id="banner">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://demo.fieldthemes.com/ps_medicine/home1/modules/fieldslideshow/images/slider-111.jpg"
              className="d-block w-100 img-fluid slide-img"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h1>NUTRINIONAL PILLS</h1>
              <h4>MADE BY NATURE</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://demo.fieldthemes.com/ps_medicine/home1/modules/fieldslideshow/images/slider-222.jpg"
              className="d-block w-100 img-fluid slide-img"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h1>JOINT & LIGAMENT</h1>
              <h4>EXPLORE YOUR OPTION</h4>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://demo.fieldthemes.com/ps_medicine/home1/modules/fieldslideshow/images/slider-333.jpg"
              className="d-block w-100 img-fluid slide-img"
              alt="..."
            />
            <div className="carousel-caption d-block">
              <h1>OUR ONLINE PHARMACY</h1>
              <h4>LAST CHANCE TO BUY</h4>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
