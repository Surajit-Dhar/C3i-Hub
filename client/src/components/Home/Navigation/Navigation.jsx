import React from "react";
import { Link } from "react-scroll";
import { useNavigate  } from "react-router-dom";
import logo from "../../../images/logo.png";
import "./Navigation.css";

export default function Navigation() {

  const navigate = useNavigate();

  const handleSignupClick = (e) => {
    e.preventDefault();
    navigate("/register");
  };

  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  var sour = "https://cdn-icons-png.flaticon.com/128/4205/4205106.png";

  return (
    <div className="navbar">
      <div className="navbar-head">
        <a href="/" className="navbar-logo">
          <img className="nav-logo" src={sour} alt="logo" style={{height:"70px", width:"93px"}}/>
        </a>
        <div className="navbar-links">
          <span><Link activeClass="active" to="home" spy={true} smooth={true}>Home</Link></span>
          <span><Link  to="about" spy={true} smooth={true}>About</Link></span>
          <span><Link  to="footer" spy={true} smooth={true}>Contact us</Link></span>
        </div>
      </div>
      <div className="justify-content-left buttons">
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleSignupClick}>Signup</button>
      </div>
    </div>
  );
}
