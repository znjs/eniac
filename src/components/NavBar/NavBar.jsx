import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
function NavBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
    return null;
  }
  return (
    <div className="bg-nav-background text-gray-50 flex justify-between items-center p-4">
      <div
        className="flex items-center cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <img
          className="h-10"
          src="https://res.cloudinary.com/donqbxlnc/image/upload/v1651952778/NeoPortal_logo_sw-modified_hxba46.png"
        />
        <p className="px-4 text-3xl select-none  font-bold">NeoPortal</p>
      </div>
      <div className="flex items-center bg-gray-800 rounded px-2 w-3/6 justify-between">
        <input
          type="text"
          placeholder="Search . . ."
          className="bg-gray-800 outline-none rounded px-4 py-2 text-gray-50 placeholder:text-gray-300 grow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <AiOutlineClose
          className="text-gray-300 text-xl cursor-pointer w-4"
          onClick={() => setSearch("")}
        />
      </div>
      <i
        class="fa fa-user-circle text-3xl cursor-pointer hover:bg-gray-600  rounded-full"
        aria-hidden="true"
        onClick={() => navigate("/profile")}
      ></i>
    </div>
  );
}

export { NavBar };
