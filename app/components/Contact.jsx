'use client';

import { useState } from 'react';
import { Mail, MapPin, Copy, Check, Send, Download } from 'lucide-react';
import { profile } from '../../lib/data';

function LinkedInIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="section-padding contact-clean-section">
      <div className="container">
        <div className="section-header center-header">
          <span className="section-kicker">Get In Touch</span>
          <h2 className="section-title">Let&rsquo;s Build Something Together</h2>
          <p className="section-subtitle">
            Open for Senior Full Stack roles, consultations, and technical inquiries.
          </p>
        </div>

        <div className="clean-contact-grid">
          {/* Direct Details */}
          <div className="clean-contact-card">
            <h3>Contact Info</h3>
            <div className="contact-item">
              <Mail size={18} />
              <div className="item-text">
                <span>Email</span>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>
              <button className="copy-icon-btn" onClick={handleCopyEmail} title="Copy Email">
                {copied ? <Check size={14} className="text-emerald" /> : <Copy size={14} />}
              </button>
            </div>

            <div className="contact-item">
              <MapPin size={18} />
              <div className="item-text">
                <span>Location</span>
                <p>{profile.location}</p>
              </div>
            </div>

            <div className="contact-social-row">
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="social-pill-btn">
                <LinkedInIcon size={16} /> LinkedIn
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="social-pill-btn">
                <GitHubIcon size={16} /> GitHub
              </a>
              <a href={profile.resumeUrl} download="Manish_Gadekar_Resume.pdf" className="social-pill-btn accent-pill">
                <Download size={16} /> Resume
              </a>
            </div>

            {copied && <p className="toast-copied">✓ Email copied to clipboard!</p>}
          </div>

          {/* Contact Form */}
          <div className="clean-contact-card">
            {formSubmitted ? (
              <div className="form-success-box">
                <Check size={36} className="text-emerald" />
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. I will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="clean-form">
                <h3>Send Message</h3>
                <input
                  type="text"
                  required
                  placeholder="Your Name *"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder="Your Email *"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                <textarea
                  required
                  rows={4}
                  placeholder="Your Message *"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                <button type="submit" className="btn btn-primary btn-pill w-full">
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
