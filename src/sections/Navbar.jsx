import HamburgerMenu from "../components/HamburgerMenu"

const Navbar = () => {
  return (
    <header className="flex justify-between items-center py-5">
      <h1 className="text-4xl font-semibold">Edu.io</h1>
      <nav className="font-normal text-lg">
        <ul className="flex justify-between items-center gap-10">
            <li><a href="#">Home</a></li>
            <li><a href="#">Teachers</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Sign In</a></li>
        </ul>
      </nav>
      <HamburgerMenu className="hidden"/>
    </header>
  );
};

export default Navbar;
