import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/">
          Navbar
        </Link>
        <div>
        <Link to="/login" className="text-black">
            Login
        </Link> / 
        <Link to="/registration" className="text-black">
            Registration
        </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
