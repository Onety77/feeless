import React, { useCallback, useRef, useState } from "react";
import { CA } from "../config.js";

export default function CopyCA({ compact = false, className = "" }) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = useCallback(async (e) => {
    try {
      await navigator.clipboard.writeText(CA);
    } catch (err) {
      const ta = document.createElement("textarea");
      ta.value = CA;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
      } catch (_) {}
      document.body.removeChild(ta);
    }

    const rect = e.currentTarget.getBoundingClientRect();
    window.dispatchEvent(
      new CustomEvent("feeless-confetti", {
        detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
      })
    );

    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 1600);
  }, []);

  return (
    <button
      className={`copy-ca ${compact ? "copy-ca--compact" : ""} ${className}`}
      onClick={handleCopy}
      aria-label="Copy contract address"
    >
      <span className="copy-ca__text">
        {compact ? `${CA.slice(0, 4)}…${CA.slice(-4)}` : CA}
      </span>
      <span className="copy-ca__icon">{copied ? "✓" : "⧉"}</span>
    </button>
  );
}
