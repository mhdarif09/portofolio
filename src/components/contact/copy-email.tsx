"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface CopyEmailProps {
  email: string;
}

type CopyStatus = "idle" | "copied" | "error";

function copyWithFallback(text: string) {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "0";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    const copied = document.execCommand("copy");
    document.body.removeChild(textarea);
    return copied;
  } catch {
    return false;
  }
}

export function CopyEmail({ email }: CopyEmailProps) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  async function handleCopy() {
    let copied = false;

    try {
      await navigator.clipboard.writeText(email);
      copied = true;
    } catch {
      copied = copyWithFallback(email);
    }

    setStatus(copied ? "copied" : "error");

    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => setStatus("idle"), 2400);
  }

  const label =
    status === "copied"
      ? "Copied"
      : status === "error"
        ? "Copy failed"
        : "Copy email";

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        className="button-outline"
        onClick={handleCopy}
        aria-label={`Copy email address ${email}`}
      >
        {status === "copied" ? (
          <Check aria-hidden="true" size={14} strokeWidth={1.8} />
        ) : (
          <Copy aria-hidden="true" size={14} strokeWidth={1.6} />
        )}
        {label}
      </button>
      <span
        aria-live="polite"
        className="mono text-[0.58rem] uppercase tracking-[0.1em] text-muted"
      >
        {status === "copied"
          ? "Address copied"
          : status === "error"
            ? "Select the address to copy"
            : ""}
      </span>
    </div>
  );
}
