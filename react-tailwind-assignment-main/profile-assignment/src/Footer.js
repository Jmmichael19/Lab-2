import React from "react";

function Footer() {
  return (
    <footer className="p-4 bg-gray-800 text-white text-center">
      <p>© John Michael N. Pugales. All rights reserved.</p>
      <div className="flex justify-center gap-6 mt-2">
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className="cursor-pointer hover:text-blue-600 transform transition-transform duration-200 hover:scale-105">Facebook</a>
        <a href="https://Instagram.com" target="_blank" rel="noreferrer" className="cursor-pointer hover:text-blue-600 transform transition-transform duration-200 hover:scale-105">Instagram</a>
        <a href="https://Youtube.com" target="_blank" rel="noreferrer" className="cursor-pointer hover:text-blue-600 transform transition-transform duration-200 hover:scale-105">Youtube</a>
        <a href="https://Tiktok.com" target="_blank" rel="noreferrer" className="cursor-pointer hover:text-blue-600 transform transition-transform duration-200 hover:scale-105">TikTok</a>
      </div>
    </footer>
  );
}

export default Footer;
