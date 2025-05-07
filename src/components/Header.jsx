import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/components/header.css";
import logoBlack from "../assets/logo-black-png.PNG";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="logo__wrapper">
          <Link to="/" onClick={handleMenuClose} className="logo__link">
            <img
              src={logoBlack}
              alt="Mike Innella Logo"
              className="header__logo"
            />
            <span className="logo__text">
              Home{" "}
              <i
                className="fa-solid fa-backward-step"
                style={{ marginLeft: "24px" }}
              ></i>
            </span>
          </Link>
        </div>

        <button
          className="header__menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`header__nav ${menuOpen ? "header__nav--open" : ""}`}>
          <ul className="header__list">
            <li
              className={`header__item trace-hover ${
                location.pathname === "/about" ? "active" : ""
              }`}
            >
              <Link to="/about" onClick={handleMenuClose}>
                About
              </Link>
            </li>
            <li
              className={`header__item trace-hover ${
                location.pathname === "/projects" ? "active" : ""
              }`}
            >
              <Link to="/projects" onClick={handleMenuClose}>
                Projects
              </Link>
            </li>
            <li
              className={`header__item trace-hover ${
                location.pathname === "/contact" ? "active" : ""
              }`}
            >
              <Link to="/contact" onClick={handleMenuClose}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
