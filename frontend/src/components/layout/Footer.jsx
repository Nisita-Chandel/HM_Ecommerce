// src/components/layout/Footer.jsx
import React from "react";
import { Instagram, Youtube, Facebook, } from "lucide-react";
import { FaPinterest } from "react-icons/fa";
import { FaTiktok, FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 mt-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 text-xs md:text-sm text-gray-800">

        {/* TOP COLUMNS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* SHOP */}
          <div>
            <h3 className="font-semibold mb-3 uppercase text-[11px] tracking-wide">
              Shop
            </h3>
            <ul className="space-y-1">
              <li>Ladies</li>
              <li>Men</li>
              <li>Kids</li>
              <li>Home</li>
              <li>Beauty</li>
            </ul>
          </div>

          {/* CORPORATE INFO */}
          <div>
            <h3 className="font-semibold mb-3 uppercase text-[11px] tracking-wide">
              Corporate Info
            </h3>
            <ul className="space-y-1">
              <li>Career at H&M</li>
              <li>About H&M Group</li>
              <li>Sustainability H&M Group</li>
              <li>Press</li>
              <li>Investor Relations</li>
              <li>Corporate Governance</li>
            </ul>
          </div>

          {/* HELP */}
          <div>
            <h3 className="font-semibold mb-3 uppercase text-[11px] tracking-wide">
              Help
            </h3>
            <ul className="space-y-1">
              <li>Customer Service</li>
              <li>My H&M</li>
              <li>Find a Store</li>
              <li>Legal &amp; Privacy</li>
              <li>Contact</li>
              <li>Secure Shopping</li>
              <li>Cookie Notice</li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="font-semibold mb-3 uppercase text-[11px] tracking-wide">
              Newsletter
            </h3>
            <p className="text-gray-600 mb-3">
              Sign up now and be the first to know about exclusive offers, latest
              fashion news & style tips!
            </p>
            <button className="mt-1 inline-flex items-center text-xs md:text-sm underline">
              Read more
            </button>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between text-[11px] text-gray-500 border-t border-gray-200 pt-4">
          <p>HM.COM / HOME</p>
          <p className="mt-2 md:mt-0">
            © {new Date().getFullYear()} H&M clone for project use only
          </p>
        </div>

        {/* SOCIAL MEDIA ICONS ROW */}
        <div className="mt-6 flex justify-end items-center gap-5 pr-2">
          <Instagram size={20} className="hover:opacity-70 cursor-pointer" />
          <FaTiktok size={20} className="hover:opacity-70 cursor-pointer" />
          <FaSpotify size={20} className="hover:opacity-70 cursor-pointer" />
          <Youtube size={20} className="hover:opacity-70 cursor-pointer" />
          <FaPinterest size={20} className="hover:opacity-70 cursor-pointer" />
          <Facebook size={20} className="hover:opacity-70 cursor-pointer" />
        </div>

      </div>
    </footer>
  );
};

export default Footer;
