import React from "react";
import { Link } from "react-router-dom";
import Mark from "./Mark.jsx";
import CopyCA from "./CopyCA.jsx";
import { LINKS } from "../config.js";

export default function Footer() {
  return (
    <footer className="footer">
      <Link to="/" className="nav__brand">
        <Mark size={22} />
        <span>FEELESS</span>
      </Link>
      <div className="footer__links">
        <Link to="/lore">Lore</Link>
        <a href={LINKS.chart} target="_blank" rel="noreferrer">Chart</a>
        <a href={LINKS.x} target="_blank" rel="noreferrer">Community</a>
      </div>
      <CopyCA compact />
      <div className="footer__note">$0 commission since 2013. Feeless forever.</div>
    </footer>
  );
}
