import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  FaBars,
  FaDribbble,
  FaFacebook,
  FaTwitter,
  FaXmark,
} from "react-icons/fa6";

const Navbar = () => {
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/blogs", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/contact", link: "Contact Us" },
    { path: "/services", link: "Services" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-[100%] bg-blue-400 fixed top-0 left-0 right-0 z-[10]">
        {/* Navigation */}
      <nav
        className="max-w-7xl h-full p-4 m-auto 
            text-sm text-white 
            flex items-center justify-between
            "
      >
        <Link key={"/"} href="/" className="text-2xl">
          Tailwind
        </Link>

        <ul className="hidden md:flex items-center justify-between gap-8 text-center ">
          {navItems.map(({ path, link }) => (
            <li
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <NavLink to={path} key={path}
              className="flex justify-between">{link}</NavLink>
            </li>
          ))}
        </ul>

        {/* Social icons */}
        <div className="lg:flex items-center gap-4">
          <Link to={"/"}>
            <FaFacebook className="hidden lg:block w-5 h-5 text-white hover:text-blue-500" />
          </Link>
          <Link to={"/"}>
            <FaDribbble className="hidden lg:block w-5 h-5 text-white hover:text-blue-500" />
          </Link>
          <Link to={"/"}>
            <FaTwitter className="hidden lg:block w-5 h-5 text-white hover:text-blue-500" />
          </Link>

          <button
            className="hidden md:block bg-blue-500 text-white py-2 px-8
                    uppercase transition-all ease-in-out duration-200 hover:bg-white
                     hover:text-gray-900  ml-8 tracking-wide"
          >
            Login
          </button>
        </div>

        {/* menu icon|bar */}
        <button
          onClick={toggleMenu}
          className="cursor-pointer md:hidden
                "
        >
          {!isMenuOpen ? (
            <FaBars className="w-5 h-5 text-white" />
          ) : (
            <FaXmark className="w-5 h-5 text-white" />
          )}
        </button>
      </nav>

      {/* menu items for Mobile */}
      <div
        className={`md:hidden block
             bg-white text-black mt-14 ${
               isMenuOpen
                 ? "fixed top-0 left-0 right-0 transition ease-out duration-200"
                 : "hidden"
             }`}
      >
        <ul className="flex flex-col gap-8 px-4 pt-12 pb-8">
          {navItems.map(({ path, link }) => (
            <li>
              <NavLink onClick={toggleMenu} to={path} key={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
