import React from "react";
import "../css/MyHeader.css";
import bull_skull from "./hat.png";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <nav>
      <ul>
        <Link style={{ color: "rgb(243,229,122)", textDecoration: "none",fontWeight:"bold" }} to="/">
          <li>Home</li>
        </Link>
        
        <Link
          style={{ color: "rgb(243,229,122)", textDecoration: "none",fontWeight:"bold" }}
          to="/register"
        >
          <li>Register</li>
        </Link>
        
        <Link
          style={{ color: "rgb(243,229,122)", textDecoration: "none",fontWeight:"bold" }}
          to="/login"
        >
          <li>Login</li>
        </Link>
      </ul>
    </nav>
  );
};

class Header extends React.Component {
  
  render() {
    return (
      <header className="myHeader">
        <a className="logo" href="/">
          <img src={bull_skull} alt="" className="logostyle" />
        </a>
        
        <NavBar className="navbar" />
      </header>
    );
  }
}

export default Header;
