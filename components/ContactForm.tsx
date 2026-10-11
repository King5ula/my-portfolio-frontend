"use client";

import { useState, type FormEvent } from "react";
import { ApiError, sendContactMessage } from "@/lib/api-client";

type Status = { kind: "idle" | "sending" } | { kind: "sent" | "error"; text: string };

const LABEL = "font-mono text-[0.75rem] uppercase tracking-[0.15em] text-muted";
const FIELD =
  "mt-2 w-full rounded-[10px] border border-line bg-bg px-3.5 py-3 text-[0.95rem] text-ink outline-none transition-colors duration-200 focus:border-accent";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (status.kind === "sending") return;
    setStatus({ kind: "sending" });

    try {
      const text = await sendContactMessage({ name, email, message });
      setStatus({ kind: "sent", text });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      const text =
        error instanceof ApiError
          ? error.message
          : "Couldn't reach the server. Please try again shortly.";
      setStatus({ kind: "error", text });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[28px] border border-line bg-surface p-6 text-left md:p-8"
    >
      <label className="block">
        <span className={LABEL}>Your name</span>
        <input
          name="name"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className={FIELD}
        />
      </label>

      <label className="mt-5 block">
        <span className={LABEL}>Email</span>
        <input
          name="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={FIELD}
        />
      </label>

      <label className="mt-5 block">
        <span className={LABEL}>Message</span>
        <textarea
          name="message"
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className={`${FIELD} resize-y`}
        />
      </label>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status.kind === "sending"}
          className="rounded-[30px] bg-accent px-7 py-3 font-semibold text-white transition-all duration-[250ms] hover:-translate-y-0.5 disabled:cursor-default disabled:opacity-60 disabled:hover:translate-y-0"
        >
          {status.kind === "sending" ? "Sending..." : "Send message"}
        </button>
        {(status.kind === "sent" || status.kind === "error") && (
          <p
            role="status"
            className={`text-[0.9rem] ${status.kind === "sent" ? "text-accent" : "text-red-500"}`}
          >
            {status.text}
          </p>
        )}
      </div>
    </form>
  );
}
