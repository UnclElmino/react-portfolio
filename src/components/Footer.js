import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Contact from ${form.name || "Website"}`);
    const body = encodeURIComponent(`${form.message}\n\nContact: ${form.email}`);
    window.location.href = `mailto:emilio.imam09@gmail.com?subject=${subject}&body=${body}`;
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="brand">Emilio</div>
        <div className="social">
          <a href="https://www.instagram.com/isartman" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/emilioimam/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/UnclElmino" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="icon" />
          </a>
        </div>
      </div>

      <div className="footer-right">
        <form className="contact-form" onSubmit={onSubmit}>
          <div className="contact-top">
            <input name="name" value={form.name} onChange={onChange} placeholder="Name" aria-label="Name" />
            <input name="email" value={form.email} onChange={onChange} placeholder="Email" aria-label="Email" />
          </div>
          <textarea name="message" value={form.message} onChange={onChange} placeholder="Message" aria-label="Message" rows="2" />
          <button type="submit">Send</button>
        </form>
      </div>
    </footer>
  );
};