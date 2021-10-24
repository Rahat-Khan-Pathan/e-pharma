import React from "react";
import { Link, NavLink } from "react-router-dom";
import { HashLink, NavHashLink } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  // getting user data from context api
  const { user, logout } = useAuth();
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink to="/home" className="navbar-brand">
          E PHARMA
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavHashLink
                to="/home#banner"
                className="nav-link"
                activeClassName="active-nav"
              >
                Home
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavHashLink to="/home#medicines" className="nav-link">
                Medicines
              </NavHashLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/cart"
                className="nav-link"
                activeClassName="active-nav"
              >
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link"
                activeClassName="active-nav"
              >
                About
              </NavLink>
            </li>
          </ul>
          {user.email ? (
            <div className="d-flex user">
              <li className="nav-item">
                <p className="user-name text-white">{user.displayName}</p>
              </li>
              <li className="nav-item">
                <button
                  onClick={logout}
                  className="btn btn-outline-danger logout-btn"
                >
                  Log Out
                </button>
              </li>
            </div>
          ) : (
            <div className="user d-flex">
              <li className="nav-item">
                <NavLink to="/login">
                  <button className="btn btn-outline-danger logout-btn">
                    Log In
                  </button>
                </NavLink>
              </li>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
