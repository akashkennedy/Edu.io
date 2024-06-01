import { Route, Routes } from "react-router-dom";
import Navbar from "./sections/Navbar.jsx";
import Teachers from "./pages/Teachers.jsx"
import SignIn from "./pages/SignIn.jsx"
import ContactUs from "./pages/ContactUs.jsx"
import Home from "./pages/Home.jsx"
import NotFound from "./pages/NotFound.jsx";
import { useLocation } from "react";


const App = () => {
  const location = useLocation();
  const getLinkClass = (path) => (location.pathname === path ? 'active' : '');
  
  return (
  <main className="h-screen">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/teachers" element={<Teachers />}/>
      <Route path="/signin" element={<SignIn />}/>
      <Route path="/contact" element={<ContactUs />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </main>
)};

export default App
