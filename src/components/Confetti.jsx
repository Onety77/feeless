import React, { useEffect, useRef } from "react";

// Fire a burst from anywhere with:
//   window.dispatchEvent(new CustomEvent("feeless-confetti", { detail: { x, y } }))
export default function Confetti() {
  const containerRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function burst(e) {
      if (prefersReducedMotion) return;
      const { x = window.innerWidth / 2, y = window.innerHeight / 2 } =
        e.detail || {};
      const el = containerRef.current;
      if (!el) return;

      const colors = ["#cdff02", "#ffffff", "#8fae02"];
      const count = 18;

      for (let i = 0; i < count; i++) {
        const piece = document.createElement("span");
        piece.className = "confetti-piece";
        const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
        const distance = 60 + Math.random() * 90;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        piece.style.setProperty("--tx", `${tx}px`);
        piece.style.setProperty("--ty", `${ty}px`);
        piece.style.setProperty("--rot", `${Math.random() * 360}deg`);
        piece.style.left = `${x}px`;
        piece.style.top = `${y}px`;
        piece.style.background = colors[i % colors.length];
        piece.style.width = piece.style.height = `${5 + Math.random() * 4}px`;
        el.appendChild(piece);
        setTimeout(() => piece.remove(), 900);
      }
    }

    window.addEventListener("feeless-confetti", burst);
    return () => window.removeEventListener("feeless-confetti", burst);
  }, []);

  return <div ref={containerRef} className="confetti-layer" aria-hidden="true" />;
}
