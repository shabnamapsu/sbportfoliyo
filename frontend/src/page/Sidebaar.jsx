import React from "react";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

function Sidebaar() {
  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 flex items-center gap-4 z-50">
      
      {/* Vertical Line */}
      <div className="w-[1px] h-[400px] bg-gray-500"></div>

      {/* Social Icons */}
      <div className="flex flex-col gap-6 text-3xl">
        <a
          href="https://wa.me/917489480732"
          target="_blank"
          rel="noreferrer"
          className="text-green-500 hover:scale-110 transition"
        >
          <FaWhatsapp />
        </a>

        <a
          href="https://facebook.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-500 hover:scale-110 transition"
        >
          <FaFacebook />
        </a>

        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="text-pink-500 hover:scale-110 transition"
        >
          <FaInstagram />
        </a>

        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="text-blue-400 hover:scale-110 transition"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="text-white hover:scale-110 transition"
        >
          <FaGithub />
        </a>
      </div>
    </div>
  );
}

export default Sidebaar;