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

  if(menu) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }

  return (
    <header className="flex justify-between items-center px-5 sm:px-10 py-5">
      <h1>Edu.io</h1>
      <nav className="sm:font-normal text-l">
        {menu ? <nav className="absolute bg-white left-0 top-20 h-full text-4xl w-full">
        <ul className="flex flex-col gap-10 p-20 items-center">
         {navLinks.map(link => (
          <li onClick={handleMenu} key={link.id}><NavLink to={link.url} className="">{link.title}</NavLink></li>
         ))}
         </ul>
        </nav> : ""}
        
        <ul className="hidden sm:flex items-center justify-between gap-10">
         {navLinks.map(link => (
          <li  key={link.id}><NavLink to={link.url} className="">{link.title}</NavLink></li>
         ))}
        </ul>
      </nav>
      <img
        src={menu ? CloseIcon : HamburgerMenuIcon}
        className="lg:hidden sm:block size-10 cursor-pointer"
        onClick={handleMenu}
      />
    </header>
  );
};

export default Navbar;
