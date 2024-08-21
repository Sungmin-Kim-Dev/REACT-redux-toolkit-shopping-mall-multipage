import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "Sustainability",
  ];
  return (
    <div>
      <div className="mr-4 flex justify-end gap-8 p-3">
        <button className="search-btn border-b-2 p-1">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          <input
            type="text"
            placeholder="Enter Keywords"
            className="w-32 focus-visible:outline-0"
          />
        </button>
        <button className="login-btn flex items-center gap-2">
          <FontAwesomeIcon icon={faUser} />
          <span>Log in</span>
        </button>
      </div>
      <div className="mx-auto w-16">
        <img src="./image/logo.png" alt="" />
      </div>
      <ul className="mt-5 flex justify-center gap-4">
        {menuList.map((menu) => (
          <li>{menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
