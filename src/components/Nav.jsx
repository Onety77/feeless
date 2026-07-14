import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Mark from "./Mark.jsx";
import CopyCA from "./CopyCA.jsx";
import { LINKS } from "../config.js";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <Link to="/" className="nav__brand">
        <Mark size={26} />
        <span>FEELESS</span>
      </Link>

      <div className="nav__links">
        <NavLink to="/" end className="nav__link">
          Home
        </NavLink>
        <NavLink to="/lore" className="nav__link">
          Lore
        </NavLink>
        <a className="nav__link" href={LINKS.chart} target="_blank" rel="noreferrer">
          Chart
        </a>
        <a className="nav__link" href={LINKS.x} target="_blank" rel="noreferrer">
          Community
        </a>
      </div>

      <CopyCA compact />
    </nav>
  );
}
