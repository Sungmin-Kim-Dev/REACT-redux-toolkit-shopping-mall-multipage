/* eslint-disable react/prop-types */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
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
  const search = (event) => {
    if (event.key === "Enter") {
      // console.log("key down:", event.key);
      const keyword = event.target.value;
      navigate(`/?q=${keyword}`);
      event.target.value = "";
    }
  };
  const openMobileMenu = () => {
    console.log("open");
    document.getElementById("mobile-nav").classList.remove("hidden");
    setTimeout(() => {
      document
        .getElementById("mobile-menu")
        .classList.remove("-translate-x-full");
    }, 100);
  };
  const closeMobileMenu = () => {
    console.log("close");
    document.getElementById("mobile-menu").classList.add("-translate-x-full");
    setTimeout(() => {
      document.getElementById("mobile-nav").classList.add("hidden");
    }, 500);
  };
  return (
    <div className="sticky top-0 z-10 bg-white pb-6">
      <div className="h-20 mr-4 flex items-center justify-between p-4">
        <div className='flex'>
          <button
            className="left-4 top-4 p-2 text-xl sm:hidden"
            onClick={openMobileMenu}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
          <Link to="/" className="left-14 top-4 block w-16 sm:hidden">
            <img src="./image/logo.png" alt="" />
          </Link>
        </div>
        <div className='flex justify-end flex-wrap-reverse gap-x-4 sm:gap-x-8'>
          <div className="search-btn border-b-2 p-1">
            <FontAwesomeIcon icon={faSearch} className="mr-2" />
            <input
              type="text"
              placeholder=" Enter Keywords"
              className="max-w-32 focus-visible:outline-0"
              onKeyDown={(event) => search(event)}
            />
          </div>
          <button
            onClick={() => loginButton()}
            className="login-btn flex items-center gap-2"
          >
            <FontAwesomeIcon icon={faUser} />
            <span>Log {authenticate ? "out" : "in"}</span>
          </button>
        </div>
      </div>
      <Link to="/" className="mx-auto hidden w-16 sm:block">
        <img src="./image/logo.png" alt="" />
      </Link>
      <ul className="mt-5 hidden justify-center gap-4 sm:flex">
        {menuList.map((menu) => (
          <li key={menu}>{menu}</li>
        ))}
      </ul>
      <nav
        id="mobile-nav"
        className="fixed top-0 hidden size-full bg-black bg-opacity-20 transition-all duration-200"
      >
        <ul
          id="mobile-menu"
          className="flex h-full w-6/12 min-w-fit flex-col bg-gray-50 p-10 transition-all duration-500"
        >
          {menuList.map((menu) => (
            <li key={menu} className="p-4 text-lg font-semibold">
              {menu}
            </li>
          ))}
        </ul>
        <button
          id="close-btn"
          className="absolute right-4 top-4 size-10 rounded-full bg-slate-800 text-xl text-white"
          onClick={closeMobileMenu}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </nav>
    </div>
  );
};

export default NavBar;
