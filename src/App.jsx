import { Navbar, Hero, Creativity, OfferedCourses, MobileApp, Footer } from "./index.js"
import ContactUs from "./pages/ContactUs.jsx";


const App = () => {
  return (
  <main className="h-screen">
    <Navbar />
    <Hero />
    <Creativity />
    <OfferedCourses />
    <MobileApp />
    <Footer />
    <ContactUs />
  </main>
)};

export default App