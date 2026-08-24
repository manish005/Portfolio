'use client';

import { useState, useEffect } from 'react';
import { Download, Menu, X, ArrowUpRight } from 'lucide-react';
import { profile } from '../../lib/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`navbar-root ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo">
          Manish<span className="logo-accent">.</span>
        </a>

        {/* Desktop Links */}
        <nav className="desktop-nav">
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button */}
        <div className="nav-actions">
          <a
            href={profile.resumeUrl}
            download="Manish_Gadekar_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-outline btn-pill"
          >
            <Download size={14} />
            <span>Resume</span>
          </a>

          <a href="#contact" className="btn btn-sm btn-primary btn-pill">
            <span>Hire Me</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileOpen && (
        <div className="mobile-menu">
          <ul className="mobile-nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mobile-actions">
              <a
                href={profile.resumeUrl}
                download="Manish_Gadekar_Resume.pdf"
                className="btn btn-outline w-full btn-pill"
                onClick={() => setMobileOpen(false)}
              >
                <Download size={16} />
                <span>Download Resume (PDF)</span>
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
