import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "bootstrap";

const NavigationBar = (props) => {
  return (
    <div style={{ fontSize: "20px" }}>
      <nav className="container">
        <ul className="nav nav-tabs justify-content-center">
          {props.items.map((item, index) => (
            <li key={index} className="nav-item">
              <a href={item.link} className="nav-link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default NavigationBar;
