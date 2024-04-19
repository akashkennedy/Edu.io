import HamburgerMenu from "../components/HamburgerMenu";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-5 px-10">
      <h1>Edu.io</h1>
      <nav className="font-normal text-lg">
        <ul className="flex justify-between items-center gap-10">
          <li>
            <NavLink to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink  to="/teachers">Teachers</NavLink>
          </li>
          <li>
            <NavLink  to="/contactus">Contact Us</NavLink>
          </li>
          <li>
            <NavLink  to="/signin">Sign In</NavLink>
          </li>
        </ul>
      </nav>
      <HamburgerMenu className="hidden" />
    </header>
  );
};

export default Navbar;
