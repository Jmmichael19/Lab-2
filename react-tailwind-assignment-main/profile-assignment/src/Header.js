import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-center p-4 bg-blue-600 text-white shadow-md m-3">
      <nav>
        <ul className="flex space-x-20">
          <li className="cursor-pointer hover:text-white-600 transform transition-transform duration-200 hover:scale-105">
            Home
          </li>
          <li className="cursor-pointer hover:text-white-600 transform transition-transform duration-200 hover:scale-105">
            Products
          </li>
          <li className="cursor-pointer hover:text-white-600 transform transition-transform duration-200 hover:scale-105">
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
