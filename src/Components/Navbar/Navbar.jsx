import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
        <p>LUXELIFESTYLE</p>
        <ul className="nav-menu">
          <li
            onClick={() => {
              setMenu("shop");
            }}
          >
            <Link style={{ textDecoration: 'none'}} to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("mens");
            }}
          >
            <Link style={{ textDecoration: 'none'}}to="/mens">Mens</Link>
            {menu === "mens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("womens");
            }}
          >
            <Link style={{ textDecoration: 'none'}}to="/womens">Womens</Link>
            {menu === "womens" ? <hr /> : <></>}
          </li>
          <li
            onClick={() => {
              setMenu("kids");
            }}
          >
            <Link style={{ textDecoration: 'none'}}to="/kids">Kids</Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>
      </div>

      <div className="nav-login-cart">
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to='/cart'>
        <img src={cart_icon} alt="Cart Icon" />
        </Link>
        
        <div className="nav-cart-count"></div>
      </div>
    </div>
  );
};

export default Navbar;