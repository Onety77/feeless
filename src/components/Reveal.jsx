import React from "react";
import { useReveal } from "../hooks.js";

export default function Reveal({ children, className = "", delay = 0, tag = "div" }) {
  const [ref, visible] = useReveal();
  const Tag = tag;
  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal--visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
