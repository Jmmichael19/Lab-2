import React from "react";

function SideBar() {
  return (
    <aside className="w-48 h-full bg-gray-200 p-4">
      <nav>
        <ul className="space-y-2">
          <li className="cursor-pointer hover:text-blue-600 transform transition-transform duration-200 hover:scale-105">
            Menu 1
          </li>
          <li className="cursor-pointer hover:text-blue-600 transform transition-transform duration-200 hover:scale-105">
            Menu 2
          </li>
          <li className="cursor-pointer hover:text-blue-600 transform transition-transform duration-200 hover:scale-105">
            Menu 3
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default SideBar;
