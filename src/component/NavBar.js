/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";

const NavBar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();
  const loginButton = () => {
    authenticate ? setAuthenticate(false) : navigate("/login");
  };

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
    <div className="sticky top-0 z-10 bg-white pb-6">
      <div className="mr-4 flex justify-end gap-8 p-3">
        <button className="search-btn border-b-2 p-1">
          <FontAwesomeIcon icon={faSearch} className="mr-2" />
          <input
            type="text"
            placeholder="Enter Keywords"
            className="w-32 focus-visible:outline-0"
          />
        </button>
        <button
          onClick={() => loginButton()}
          className="login-btn flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faUser} />
          <span>Log {authenticate ? "out" : "in"}</span>
        </button>
      </div>
      <Link to="/" className="mx-auto block w-16">
        <img src="./image/logo.png" alt="" />
      </Link>
      <ul className="mt-5 hidden justify-center gap-4 sm:flex">
        {menuList.map((menu) => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>
    </div>
  );
};

export default NavBar;
