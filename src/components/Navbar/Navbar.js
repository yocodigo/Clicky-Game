import React from "react";
import "./Navbar.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
const Navbar = props => (
  <nav className="navbar navbar-default">
      <ul>
        <li className="navbar-brand" to="/">Clicky Game</li>
        <li>Click an image to begin!</li>
        <li> Score: 0 | Top Score: 0</li>
      </ul>
  </nav>
);

export default Navbar;
