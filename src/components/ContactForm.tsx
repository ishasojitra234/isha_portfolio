"use client";

import { ArrowUpRight } from "lucide-react";
import { useRef, useState, type FormEvent } from "react";

const formspreeEndpoint = "https://formspree.io/f/mkjrkqqo";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");
  const submittingRef = useRef(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const values = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      subject: String(formData.get("subject") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
    };

    if (Object.values(values).some((value) => !value)) {
      setStatus("error");
      setFeedback("Please complete all fields before sending your message.");
      return;
    }

    Object.entries(values).forEach(([field, value]) => formData.set(field, value));
    submittingRef.current = true;
    setStatus("submitting");
    setFeedback("");

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (!response.ok) {
        setStatus("error");
        setFeedback("Your message could not be sent. Please try again or email me directly.");
        return;
      }

      form.reset();
      setStatus("success");
      setFeedback("Thanks for reaching out. Your message has been sent.");
    } catch {
      setStatus("error");
      setFeedback("A network error prevented your message from sending. Please try again or email me directly.");
    } finally {
      submittingRef.current = false;
    }
  }

  return (
    <form
      className="contact-form"
      action={formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      onChange={() => {
        if (status !== "submitting" && status !== "idle") {
          setStatus("idle");
          setFeedback("");
        }
      }}
    >
      <label>
        Your name
        <input autoComplete="name" maxLength={100} name="name" placeholder="How should I address you?" required />
      </label>
      <label>
        Your email
        <input autoComplete="email" maxLength={254} name="email" type="email" placeholder="you@company.com" required />
      </label>
      <label>
        Subject
        <select name="subject" defaultValue="" required>
          <option value="" disabled>Choose a project type</option>
          <option value="Odoo development">Odoo development</option>
          <option value="Website or e-commerce">Website or e-commerce</option>
          <option value="Integration or automation">Integration or automation</option>
          <option value="Something else">Something else</option>
        </select>
      </label>
      <label>
        Message
        <textarea name="message" rows={5} maxLength={5000} minLength={10} placeholder="What are you hoping to improve or build?" required />
      </label>
      <button className="contact-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : status === "success" ? "Message sent" : "Send message"} <ArrowUpRight size={15} />
      </button>
      <p className="contact-form-note" role={status === "error" ? "alert" : "status"} aria-live={status === "error" ? "assertive" : "polite"}>
        {feedback || "Your message will be sent through Formspree."}
      </p>
    </form>
  );
}
