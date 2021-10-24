import React, { useEffect } from "react";
import "./About.css";

const About = () => {
  // Change Title
  useEffect(() => {
    document.title = "E Pharma | About";
  }, []);

  return (
    <div className="container about-container">
      <div className="d-flex justify-content-center">
        <h2 className="medicines-header mb-4">About</h2>
      </div>
      <div className="row row-cols-1 row-cols-md-2 about-row px-2 g-4">
        <div className="col d-flex flex-column justify-content-center align-items-center ">
          <hr />
          <p className="about">
            Our Online pharmacy has a direct collaboration with manufacturers of
            prescription drugs, So we assure quality medications. Most
            importantly,We have not only original drugs but also essential drugs
            with convenient price; those are approved by DGDA Bangladesh. <br />{" "}
            <br />
            <span className="fw-bold">Mission & Vissions: </span>
            Firstly, Our task is to provide every citizen with high-quality
            medications regardless of the income level. In addition, Resorting
            to our online medicine shop, you will not waste your time for
            searching medicines in pharmacy chains.
          </p>
        </div>
        <div className="col d-flex justify-content-center align-items-center">
          <img src="/about.svg" className="w-100" alt="" />
        </div>
      </div>
    </div>
  );
};
export default About;
