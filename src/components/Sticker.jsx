import React from "react";

export function Sticker({ children, rotate = -4, className = "" }) {
  return (
    <div
      className={`sticker ${className}`}
      style={{ "--rot": `${rotate}deg` }}
    >
      {children}
    </div>
  );
}

export function Stamp({ children, tone = "lime", rotate = -8, className = "" }) {
  return (
    <div
      className={`stamp stamp--${tone} ${className}`}
      style={{ "--rot": `${rotate}deg` }}
    >
      {children}
    </div>
  );
}
