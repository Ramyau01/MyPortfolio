import { useEffect, useRef } from "react";
import { Navlinks } from "./Navlinks";
export const Navbar = ({ calculateHeight }) => {
  const NavbarRef = useRef(null);
  useEffect(() => {
    console.log("In useEffect", NavbarRef);
    calculateHeight(NavbarRef);
  });
  console.log(NavbarRef);

  return (
    <nav>
      <div className="navbar bg-base-100 shadow-sm" ref={NavbarRef}>
        <div className="navbar-start flex-none w-auto">
          <div className="dropdown">
            <button
              tabIndex={0}
              aria-label="Toggle navigation menu"
              aria-expanded="false"
              aria-controls="menu-1"
              className="btn btn-ghost md:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>

            <ul
              aria-label="Main navigation"
              role="menu"
              id="menu-1"
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-base"
            >
              <Navlinks></Navlinks>
            </ul>
          </div>
          <a
            href="/"
            aria-current="page"
            className="btn btn-ghost text-xl hidden md:flex"
          >
            daisyUI
          </a>
        </div>
        <div className="navbar-center flex-1 justify-center">
          <a
            href="/"
            aria-current="page"
            className="btn btn-ghost text-xl md:hidden"
          >
            daisyUI
          </a>

          <ul
            tabIndex={0}
            aria-label="Main navigation"
            className="menu menu-horizontal px-1 hidden md:flex gap-x-4 text-base"
          >
            <Navlinks></Navlinks>
          </ul>
        </div>
      </div>
    </nav>
  );
};
