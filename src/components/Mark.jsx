import React from "react";

export default function Mark({ size = 26, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`feeless-mark ${className}`}
    >
      <path d="M30 6L14 22V32L30 16V6Z" fill="var(--lime)" />
      <path d="M14 22L4 42H8L18 26L14 22Z" fill="var(--lime)" />
      <path d="M30 16V26L36 20L30 16Z" fill="var(--void)" opacity="0.85" />
    </svg>
  );
}
