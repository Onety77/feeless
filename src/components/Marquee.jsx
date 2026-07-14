import React from "react";

const DEFAULT_ITEMS = [
  "PRE-2015 · $7–$10 PER TRADE",
  "2013 · TWO STANFORD GRADS SAY NO MORE",
  "2015 · COMMISSIONS DROP TO $0",
  "2019 · SCHWAB, TD AMERITRADE, E*TRADE FOLLOW",
  "27M+ FUNDED ACCOUNTS AND COUNTING",
  "FEELESS · THE LEGACY, MEMED",
];

export default function Marquee({ items = DEFAULT_ITEMS }) {
  const doubled = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee__track">
        {doubled.map((item, i) => (
          <span className="marquee__item" key={i}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
