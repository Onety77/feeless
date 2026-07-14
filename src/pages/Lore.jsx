import React from "react";
import Reveal from "../components/Reveal.jsx";
import { Sticker, Stamp } from "../components/Sticker.jsx";
import CopyCA from "../components/CopyCA.jsx";
import { LINKS } from "../config.js";
import { useReveal, useCountUp } from "../hooks.js";

const TIMELINE = [
  {
    year: "2013",
    title: "Two Stanford Grads Say No More",
    text: (
      <>
        Former classmates <strong>Vladimir Tenev</strong> and{" "}
        <strong>Baiju Bhatt</strong> founded Robinhood. They'd built
        high-frequency trading systems for Wall Street and saw a broken system
        up close — institutions traded for nearly nothing, while everyday
        people paid <strong>$7 to $10 per trade</strong>. They named the
        company after the outlaw who took from the gatekeepers and gave to the
        people.
      </>
    ),
  },
  {
    year: "2015",
    title: "Commissions Hit Zero",
    text: (
      <>
        After a waitlist hundreds of thousands deep, Robinhood launched to the
        public — mobile-first, beautifully simple, and{" "}
        <strong>completely free</strong> for stock trades, at a time when that
        was unheard of.
      </>
    ),
  },
  {
    year: "2019",
    title: "The Whole Industry Folds",
    text: (
      <>
        One move forced the entire industry to change.{" "}
        <strong>Schwab, TD Ameritrade, E*TRADE</strong> and others dropped
        their commissions too. Robinhood didn't just save users money — it
        reshaped how millions of people, especially younger investors, access
        markets.
      </>
    ),
  },
  {
    year: "2026",
    title: "Feeless Is Born",
    text: (
      <>
        <strong>Feeless</strong> exists to celebrate and meme that shift. Not
        just zero fees on trades — the idea that markets should belong to
        everyone, not just those who could afford the old costs.
      </>
    ),
  },
];

export default function Lore() {
  const [statsRef, statsVisible] = useReveal();
  const fundedAccounts = useCountUp(27, { duration: 1400, start: statsVisible });

  return (
    <>
      <header className="page-header">
        <Sticker rotate={-4}>The Origin</Sticker>
        <h1 className="page-header__title">How It All Started</h1>
        <p className="page-header__sub">
          The real story behind the meme — from $10 trades to $0, forever.
        </p>
      </header>

      <section className="section">
        <div className="timeline">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.year} delay={i * 80} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__year">{item.year}</div>
              <div className="timeline__title">{item.title}</div>
              <div className="timeline__text">{item.text}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <Reveal>
          <div className="block-eyebrow">The Why</div>
          <h2 className="block-title">The Problem They Solved</h2>
          <p className="body-copy">
            Before Robinhood, finance felt exclusive, complicated, and
            expensive. A single stock trade could cost $7–$10 in commissions —
            a wall for small accounts and new investors, and hundreds or
            thousands a year in fees for anyone trading often.
          </p>
          <p className="body-copy">
            The zero-commission model removed that friction entirely.
            Robinhood bet that volume — and a new revenue model — would
            replace commissions. It worked, and investing hasn't looked the
            same since.
          </p>
        </Reveal>

        <Reveal delay={100} className="compare-row">
          <Stamp tone="dark" rotate={-6}>
            $7–$10 <span>PER TRADE</span>
          </Stamp>
          <span className="compare-row__arrow">→</span>
          <Stamp tone="lime" rotate={5}>
            $0.00 <span>FOREVER</span>
          </Stamp>
        </Reveal>
      </section>

      <section className="section">
        <Reveal>
          <div className="block-eyebrow">The Scale</div>
          <h2 className="block-title">The Feeless Revolution, By The Numbers</h2>
          <p className="body-copy">
            Every time someone trades without a commission today, they're
            feeling the direct legacy of that 2013 decision. The feeless era
            Robinhood helped create still benefits everyday traders across
            every platform.
          </p>
        </Reveal>

        <div
          ref={statsRef}
          className={`reveal stat-grid ${statsVisible ? "reveal--visible" : ""}`}
          style={{ transitionDelay: "100ms" }}
        >
          <div className="stat-card" style={{ "--rot": "-2deg" }}>
            <div className="stat-num">$0</div>
            <div className="stat-label">Commission per trade, since 2015</div>
          </div>
          <div className="stat-card" style={{ "--rot": "1.5deg" }}>
            <div className="stat-num">{fundedAccounts}M+</div>
            <div className="stat-label">Funded accounts on Robinhood alone</div>
          </div>
          <div className="stat-card" style={{ "--rot": "-1deg" }}>
            <div className="stat-num">2019</div>
            <div className="stat-label">Year every major broker followed suit</div>
          </div>
          <div className="stat-card" style={{ "--rot": "2deg" }}>
            <div className="stat-num">2013</div>
            <div className="stat-label">Where this whole story begins</div>
          </div>
        </div>
      </section>

      <section className="section section--legacy">
        <Reveal>
          <div className="block-eyebrow block-eyebrow--center">2026 And Still Feeless</div>
          <h2 className="block-title block-title--center">Why This Still Matters</h2>
          <p className="body-copy body-copy--center">
            Over a decade later, Robinhood keeps pushing — crypto, 24/5
            trading, its own blockchain ecosystem. The original promise
            remains: make finance feeless and accessible. The disruption
            started in 2013. The public launch hit in 2015. The industry
            changed forever. Retail traders are still winning because of it —
            and now they've got a coin that remembers.
          </p>
          <div className="section__cta">
            <a className="btn btn--primary" href={LINKS.chart} target="_blank" rel="noreferrer">
              View Chart
            </a>
            <a className="btn btn--secondary" href={LINKS.x} target="_blank" rel="noreferrer">
              Join the Community ↗
            </a>
          </div>
          <CopyCA className="hero__ca" />
        </Reveal>
      </section>
    </>
  );
}
