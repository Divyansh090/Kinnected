"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 border-t border-zinc-800 px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-2">Adapcy</h2>
          <p className="text-sm text-gray-400">
            Empowering learning through practical, affordable courses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/courses" className="hover:text-white transition">Courses</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-md font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq" className="hover:text-white transition">FAQs</Link></li>
            <li><Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms & Conditions</Link></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-md font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaGithub size={20} /></a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaTwitter size={20} /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaLinkedin size={20} /></a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white"><FaInstagram size={20} /></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm text-gray-500 border-t border-zinc-800 pt-6">
        © {new Date().getFullYear()} Adapcy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
