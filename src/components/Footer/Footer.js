import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-white">
      <p className="contact-icon">
        {" "}
        <i className="fab fa-github"></i> <i className="fab fa-linkedin"></i>{" "}
        <i className="fab fa-facebook-square"></i>{" "}
        <i className="fas fa-envelope"></i>{" "}
      </p>
      <p className="copyright">Copyright © E Pharma</p>
    </footer>
  );
};

export default Footer;
