"use client";

import { useState } from "react";
import Datalink from "@/components/motion/Datalink";

/**
 * Static-first email capture. No backend by design.
 * Wire to a provider later (Buttondown / ConvertKit / Formspree):
 * replace handleSubmit with a POST to your endpoint.
 */
export default function RewireForm() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) return;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="in-label text-frequency" role="status">
        <Datalink text="SIGNAL RECEIVED. YOU ARE ON THE LIST." />
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
    >
      <label htmlFor="rewire-email" className="sr-only">
        Email address
      </label>
      <input
        id="rewire-email"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        className="in-input"
        autoComplete="email"
      />
      <button type="submit" className="in-btn whitespace-nowrap">
        RESERVE YOUR ACCESS
      </button>
    </form>
  );
}
