"use client";

import { useState } from "react";
import Datalink from "@/components/motion/Datalink";

/**
 * Email capture. Static-first: without NEXT_PUBLIC_FORM_ENDPOINT the
 * success state is simulated and nothing is stored. With the endpoint set
 * (Formspree / Buttondown / any JSON POST target) it sends
 * { email, listTag } and succeeds on any 2xx.
 * README: set the endpoint before launch or emails are not stored.
 */
export default function RewireForm({
  label = "RESERVE YOUR ACCESS",
  placeholder = "your@email.com",
  successText = "SIGNAL RECEIVED. YOU ARE ON THE LIST.",
  listTag = "general",
}: {
  label?: string;
  placeholder?: string;
  successText?: string;
  listTag?: string;
}) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@") || state === "sending") return;

    const endpoint = process.env.NEXT_PUBLIC_FORM_ENDPOINT;
    if (!endpoint) {
      setState("sent");
      return;
    }
    setState("sending");
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ email, listTag }),
      });
      setState(res.ok ? "sent" : "error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <p className="in-label text-frequency" role="status">
        <Datalink text={successText} />
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
    >
      <label htmlFor={`rewire-email-${listTag}`} className="sr-only">
        Email address
      </label>
      <input
        id={`rewire-email-${listTag}`}
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className="in-input"
        autoComplete="email"
      />
      <input type="hidden" name="listTag" value={listTag} />
      <button
        type="submit"
        className="in-btn whitespace-nowrap"
        disabled={state === "sending"}
      >
        {state === "sending" ? "SENDING" : label}
      </button>
      {state === "error" && (
        <p className="in-label self-center text-haze" role="alert">
          SIGNAL LOST. TRY AGAIN.
        </p>
      )}
    </form>
  );
}
