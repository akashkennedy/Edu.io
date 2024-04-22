import { NavLink } from "react-router-dom";
import HamburgerMenuIcon from "../assets/hamburgericon.png";
import CloseIcon from "../assets/close.png";
import { useState } from "react";
import { navLinks } from "../constants/navLinks";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="flex justify-between items-center px-5 sm:px-10 py-5">
      <h1>Edu.io</h1>
      <nav className="sm:font-normal text-l">
        <ul className="flex items-center justify-between gap-10">
         {navLinks.map(link => (
          <li  key={link.id}><NavLink to={link.url} className="">{link.title}</NavLink></li>
         ))}
        </ul>
      </nav>
      <img
        src={menu ? CloseIcon : HamburgerMenuIcon}
        className="lg:hidden size-10 cursor-pointer"
        onClick={handleMenu}
      />
    </header>
  );
};

export default Navbar;
