import React from "react";
import {  NavLink } from "react-router-dom";
import './Header.css';
import image1 from '../images/Group 89409.png';

const Header = () => {
  return (
    <div>
      <header className="head">
    <div class="logo">
    <img src={image1} alt="Image" />
    </div>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/services">
              Services
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/lastNews">
              Last News
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/News">
            News
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li className="main-list" >
            <NavLink className="main-link support" >
              Support
            </NavLink>
          </li>
        </ul>
      </header>

    
    </div>
  );
};

export default Header;
