import React from "react";

export default function Mark({ size = 26, className = "" }) {
  return (
    <img
      src="/logo.jpg"
      alt="Feeless"
      width={size}
      height={size}
      className={`feeless-mark ${className}`}
      style={{ borderRadius: "50%", objectFit: "cover" }}
    />
  );
}
