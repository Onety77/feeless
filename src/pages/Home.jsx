import React from "react";
import { Link } from "react-router-dom";
import Mark from "../components/Mark.jsx";
import CopyCA from "../components/CopyCA.jsx";
import Marquee from "../components/Marquee.jsx";
import Reveal from "../components/Reveal.jsx";
import { Sticker, Stamp } from "../components/Sticker.jsx";
import { LINKS } from "../config.js";

export default function Home() {
  return (
    <>
      <header className="hero">
        <Sticker rotate={-6} className="hero__badge">
          <span className="live-dot live-dot--on" /> EST. 2013 · STILL $0 PER TRADE
        </Sticker>

        <h1 className="hero__title">
          Fee<span className="hero__title-lime">less</span>
          <Mark size={44} className="hero__title-mark" />
        </h1>

        <p className="hero__sub">
          The movement that started when Robinhood killed commissions in 2013 —
          and never let the industry charge you for trading again.
        </p>

        <div className="hero__actions">
          <a className="btn btn--primary" href={LINKS.chart} target="_blank" rel="noreferrer">
            View Chart
          </a>
          <a className="btn btn--secondary" href={LINKS.x} target="_blank" rel="noreferrer">
            Join the Community ↗
          </a>
        </div>

        <CopyCA className="hero__ca" />
      </header>

      <Marquee />

      <section className="section">
        <Reveal className="teaser">
          <Stamp tone="lime" rotate={-5}>DENIED: $7–$10/trade</Stamp>
          <Stamp tone="dark" rotate={4}>APPROVED: $0.00 forever</Stamp>
        </Reveal>
        <Reveal delay={100}>
          <p className="body-copy body-copy--center">
            Before 2015, trading cost you real money just to press the button.
            Feeless exists to meme the day that changed — for good.
          </p>
          <div className="section__cta">
            <Link to="/lore" className="btn btn--secondary">
              Read the Full Lore →
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
