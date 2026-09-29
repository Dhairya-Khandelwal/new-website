// src/components/Footer.jsx
// -----------------------------------------------------------------------------
// The site footer, shown at the bottom of every page (rendered once in
// App.jsx, below <Routes>). It has three columns: business address,
// social/contact links, and quick navigation links, plus a copyright line.
//
// TO UPDATE CONTACT DETAILS: search this file for the phone number
// ("9827003016"), email ("hpclcfasatna@gmail.com"), or social links and
// replace them directly.

import { Link } from "react-router-dom";
// react-icons: ready-made icon components (phone, mail, WhatsApp, etc.)
import { TiSocialTwitter } from "react-icons/ti";
import { SlSocialInstagram } from "react-icons/sl";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

export default function Footer() {
  // Shared hover style for the "Quick Links" list.
  const linkStyle = "hover:text-blue-800 transition-colors duration-300";

  return (
    <div className="bg-[#0B1F3A] text-white px-4 py-8 rounded-t-2xl">
      {/* Main Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Address */}
        <div className="space-y-4 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold">Address</h1>

          <p className="font-semibold text-lg">Vikas Automobiles</p>

          <p className="leading-relaxed text-gray-300">
            Infront of Bajaj Finance Gahara Nala, 
            <br />
            <span className="block md:inline">Near Yadav Dharmkanta, Rewa Road,</span>
            <br />
            Satna, Madhya Pradesh - 485001
          </p>
        </div>

        {/* Social Media */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Social Media</h1>

          <ul className="space-y-4">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-red-400 text-lg" />

              <a
                href="tel:+919827003016"
                className="hover:text-red-400 transition-colors"
              >
                +91 9827003016
              </a>
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <IoMail className="hover:text-red-400 text-2xl" />
              <a href="mailto:hpclcfasatna@gmail.com">Email</a>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaSquareWhatsapp className="text-green-400 text-2xl" />

              <a
                href="https://wa.me/919827003016"
                className="hover:text-green-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-3">
              <SlSocialInstagram className="text-pink-400 text-2xl" />

              <a
                href="https://www.instagram.com/hpclcfasatna/"
                className="hover:text-pink-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>

            <li className="flex items-center justify-center md:justify-start gap-3">
              <TiSocialTwitter className="text-blue-400 text-2xl" />

              <a
                href="https://twitter.com/cfa_hp_satna"
                className="hover:text-blue-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-bold mb-4">Quick Links</h1>

          <ul className="space-y-3">
            <li>
              <Link to="/" className={linkStyle}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/products" className={linkStyle}>
                Products
              </Link>
            </li>

            <li>
              <Link to="/about" className={linkStyle}>
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className={linkStyle}>
                Contact
              </Link>
            </li>

            <li>
              <Link to="/achievements" className={linkStyle}>
                Achievements
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer */}
      <footer className="border-t border-gray-600 mt-10 pt-6 text-center text-sm md:text-base text-gray-300">
        <p>&copy; 2026 Vikas Automobiles. All rights reserved.</p>

        <p className="mt-2">
          Contact Us:
          <a href="tel:+919827003016" className="ml-2 hover:text-yellow-400">
            +91 9827003016
          </a>
        </p>
      </footer>
    </div>
  );
}
