// components/Footer.jsx
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3 textw-wrap">PrepWise</h2>
          <p className="text-sm">
            Helping you prepare for your career with AI-powered tools, resume
            builders, and smart interview coaching.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/dashboard" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/resume" className="hover:text-white transition">
                Resume Builder
              </Link>
            </li>
            <li>
              <Link
                href="/ai-cover-letter"
                className="hover:text-gray-300 transition"
              >
                Cover Letter
              </Link>
            </li>
            <li>
              <Link href="/interview" className="hover:text-white transition">
                Interview Coaching
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-wrap justify-between items-center">
          <h3 className="text-lg font-semibold text-white text-center">
            Connect With Us
          </h3>
          <div className="flex space-x-4 ">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              🌐 Facebook
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PrepWise. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
