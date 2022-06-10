import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = (
    <>
      <li>
        <Link to="/home">Home</Link>
        <Link to="/projects">My Projects</Link>
        <Link to='/blog'>Blogs</Link>
        <Link to='/contact'>Contact</Link>
        <Link to='/about'>About Me</Link>
      </li>
    </>
  );
  return (
    <div>
      <div class="navbar bg-base-100">
        <div class="navbar-start">
          <div class="dropdown">
            <label tabindex="0" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabindex="0"
              class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menu}
            </ul>
          </div>
          <a class="btn btn-ghost normal-case text-xl">MUKARROM</a>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal p-0">{menu}</ul>
        </div>
        <div class="navbar-end">
          <a
            target={"_blank"}
            rel="noreferrer"
            href="https://drive.google.com/file/d/19aS5pDE7AJHiYtegz6_ehEeBKad1LFZx/view?usp=sharing"
            class="btn"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
