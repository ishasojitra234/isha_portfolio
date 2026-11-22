"use client";

import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Portfolio inquiry: ${formData.get("projectType")}`);
    const body = encodeURIComponent(
      `Name: ${formData.get("name")}\nEmail: ${formData.get("email")}\nProject type: ${formData.get("projectType")}\n\n${formData.get("message")}`,
    );

    window.location.href = `mailto:ishasojitra234@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label>
        Your name
        <input autoComplete="name" name="name" placeholder="How should I address you?" required />
      </label>
      <label>
        Your email
        <input autoComplete="email" name="email" type="email" placeholder="you@company.com" required />
      </label>
      <label>
        What would you like to discuss?
        <select name="projectType" defaultValue="" required>
          <option value="" disabled>Choose a project type</option>
          <option>Odoo development</option>
          <option>Website or e-commerce</option>
          <option>Integration or automation</option>
          <option>Something else</option>
        </select>
      </label>
      <label>
        A little about the project
        <textarea name="message" rows={5} placeholder="What are you hoping to improve or build?" required />
      </label>
      <button className="contact-submit" type="submit">
        {submitted ? "Open your email app" : "Prepare message"} <ArrowUpRight size={15} />
      </button>
      <p className="contact-form-note">
        This opens your email app with the message details ready to review and send.
      </p>
    </form>
  );
}
