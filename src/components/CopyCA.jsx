import React, { useCallback, useRef, useState } from "react";
import { CA } from "../config.js";

function legacyCopy(text) {
  const ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "0";
  ta.style.left = "0";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  ta.setSelectionRange(0, text.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (_) {
    ok = false;
  }
  document.body.removeChild(ta);
  return ok;
}

export default function CopyCA({ compact = false, className = "" }) {
  const [status, setStatus] = useState("idle"); // idle | copied | error
  const timeoutRef = useRef(null);

  const handleCopy = useCallback(async (e) => {
    let ok = false;

    if (window.isSecureContext && navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(CA);
        ok = true;
      } catch (_) {
        ok = false;
      }
    }
    if (!ok) ok = legacyCopy(CA);

    if (ok) {
      const rect = e.currentTarget.getBoundingClientRect();
      window.dispatchEvent(
        new CustomEvent("feeless-confetti", {
          detail: { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 },
        })
      );
    }

    setStatus(ok ? "copied" : "error");
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setStatus("idle"), 1600);
  }, []);

  return (
    <button
      type="button"
      className={`copy-ca ${compact ? "copy-ca--compact" : ""} ${className}`}
      onClick={handleCopy}
      aria-label="Copy contract address"
    >
      <span className="copy-ca__text">
        {compact ? `${CA.slice(0, 4)}…${CA.slice(-4)}` : CA}
      </span>
      <span className={`copy-ca__icon ${status === "error" ? "copy-ca__icon--error" : ""}`}>
        {status === "copied" ? "✓" : status === "error" ? "!" : "⧉"}
      </span>
    </button>
  );
}
