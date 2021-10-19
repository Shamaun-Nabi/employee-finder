import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo2.png";
import "./MainNav.css";

const MainNav = () => {
  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light ">
          <div className="container-fluid">
            <NavLink className=" navbar-brand" to="/home">
              <img className="logo " src={Logo} alt="" />
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
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {/* <li className="nav-item">
                  <NavLink  className="nav-link" to="/">
                    Home
                  </NavLink>
                </li> */}
                <li className="nav-item" activeClassName="active">
                  <NavLink className="nav-link" to="/home">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" activeClassName="active">
                  <NavLink className="nav-link" to="/employees">
                    Employees
                  </NavLink>
                </li>
                <li className="nav-item" activeClassName="active">
                  <NavLink className="nav-link" to="/notfound">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default MainNav;
