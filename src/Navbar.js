import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      Navbar
      <Link to="/profile">Profile</Link>
      <Link to="/">Login</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navbar;
