import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
function NavBar() {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-nav-background text-gray-50 py-2 flex justify-between items-center px-2">
      <div className="flex items-center">
        <GiHamburgerMenu className="text-5xl p-2 hover:bg-gray-600 rounded-full cursor-pointer" />
        <p className="px-4 text-3xl">NeoPortal</p>
      </div>
      <div className="flex items-center bg-gray-800 rounded px-2">
        <input
          type="text"
          placeholder="Search . . ."
          className="bg-gray-800 outline-none rounded px-4 py-2 text-gray-50 placeholder:text-gray-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineClose
          className="text-gray-300 text-xl cursor-pointer"
          onClick={() => setSearch("")}
        />
      </div>
      <FaUser className="text-5xl cursor-pointer hover:bg-gray-600 p-2 rounded-full" />
    </div>
  );
}

export { NavBar };
