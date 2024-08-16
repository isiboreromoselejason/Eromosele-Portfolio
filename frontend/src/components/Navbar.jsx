import React, { useState } from "react";
import MenuIcon from "../assets/menuIcon.png";
import "./Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={"navbar " + (menuOpen && "active")}>
        <h1>Jason Eromosele</h1>
        <img
          src={MenuIcon}
          alt="Menu Icon"
          onClick={() => setMenuOpen(!menuOpen)}
        />
      </header>

      <div className={"menu " + (menuOpen && "active")}>
        <ul>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#work">Work</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};
