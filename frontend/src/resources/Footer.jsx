import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="mt-20">
      {/* Top Border */}
      <div className="h-[0.6px] bg-gray-500"></div>

      <div className="bg-black py-10 px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Left */}
          <div>
            <h1 className="text-3xl font-bold text-green-200">
              Shabnam Bano
            </h1>
            <p className="text-gray-400 mt-2">
              MERN Stack Developer
            </p>
            <p className="text-gray-500 mt-1 text-sm">
              Building modern web applications with React & Node.js
            </p>
          </div>

          {/* Center */}
          <div className="flex gap-6 text-2xl">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-green-200 transition-all duration-300 hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-green-200 transition-all duration-300 hover:scale-110"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://instagram.com/shabnambano"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-green-200 transition-all duration-300 hover:scale-110"
            >
              <FaInstagram />
            </a>

            <a
              href="mailto:shabnam527@gmail.com"
              className="text-white hover:text-green-200 transition-all duration-300 hover:scale-110"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Right */}
          <div className="text-center md:text-right">
            <p className="text-green-200">
              Available for Opportunities
            </p>
            <p className="text-gray-400 text-sm mt-1">
              Open to MERN Stack Developer Roles
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-5 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Shabnam Bano. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;