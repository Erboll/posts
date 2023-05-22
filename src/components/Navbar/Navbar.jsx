import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <Link
            to={"/"}
            className="d-block text-decoration-none text-uppercase text-white mb-3"
          >
            Home
          </Link>
          <Link
            to={"/about-me"}
            className="d-block text-decoration-none text-uppercase text-white mb-3"
          >
            About me
          </Link>
          <Link
            to={"/about-user"}
            className="d-block text-decoration-none text-uppercase text-white mb-3"
          >
            About user
          </Link>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
