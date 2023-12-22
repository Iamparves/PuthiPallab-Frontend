import React, { useEffect, useState } from "react";
import { CgClose, CgMenu } from "react-icons/cg";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const menuItems = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Genres",
    path: "/genres",
  },
  {
    name: "Books",
    path: "/books",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const MenuLink = ({ name, path }) => {
  return (
    <NavLink
      className="rounded-md px-3 py-2.5 text-sm font-medium text-[#1d1d1d] duration-300 hover:bg-[#FEF2E2] hover:text-primary [&.active]:bg-[#FEF2E2] [&.active]:text-primary"
      to={path}
    >
      {name}
    </NavLink>
  );
};

const MobileMenuLink = ({ name, path }) => (
  <NavLink
    className="rounded-md px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-[#FEF2E2] hover:text-primary [&.active]:bg-[#FEF2E2] [&.active]:text-primary"
    to={path}
  >
    {name}
  </NavLink>
);

const Navbar = () => {
  const location = useLocation();
  const { loading, user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(true);
  const closeMenu = () => setShowMenu(false);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  return (
    <header>
      <div className="bg-white drop-shadow-sm">
        <div className="container flex h-16 items-center justify-between md:h-20">
          <NavLink onClick={closeMenu} to="/">
            <img src="/logo.svg" alt="Puthi Pallab" className="h-10 md:h-12" />
          </NavLink>
          <div>
            <button
              onClick={openMenu}
              className="fMobileMenuBtn text-[32px] text-primary md:hidden md:text-4xl"
            >
              {showMenu ? <CgClose /> : <CgMenu />}
            </button>
            <nav className="hidden items-center gap-2 md:flex">
              {menuItems.map(({ name, path }, index) => (
                <MenuLink name={name} path={path} key={index} />
              ))}
              {!loading &&
                (!user ? (
                  <MenuLink name="Login" path="/login" />
                ) : (
                  <MenuLink name="Dashboard" path="/dashboard" />
                ))}
            </nav>
          </div>
        </div>
      </div>
      <div
        className={`group invisible fixed left-0 top-0 z-50 h-screen w-full bg-black/20 opacity-0 duration-300 md:hidden [&.active]:visible [&.active]:translate-x-0 [&.active]:opacity-100 [&.active]:duration-200 ${
          showMenu ? "active" : ""
        }`}
        onClick={(e) => e.target.classList.contains("group") && closeMenu()}
      >
        <div className="h-full w-[calc(100vw-62px)] max-w-[260px] -translate-x-full bg-white duration-300 group-[&.active]:-translate-x-0">
          <div className="border-b border-gray-200/70 px-5 py-3">
            <NavLink onClick={closeMenu} to="/">
              <img
                src="/logo.svg"
                alt="Puthi Pallab"
                className="h-10 md:h-12"
              />
            </NavLink>
          </div>
          <nav className="flex flex-col gap-1.5 px-5 pt-5">
            {menuItems.map(({ name, path }, index) => (
              <MobileMenuLink name={name} path={path} key={index} />
            ))}
            {!loading &&
              (!user ? (
                <MobileMenuLink name="Login" path="/login" />
              ) : (
                <MobileMenuLink name="Dashboard" path="/dashboard" />
              ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
