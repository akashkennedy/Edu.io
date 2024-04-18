import { Navbar, Hero, Creativity, OfferedCourses, MobileApp, Footer } from "./index.js"
import SignIn from "./pages/SignIn.jsx";


const App = () => {
  return (
  <main className="h-screen">
    <Navbar />
    <Hero />
    <Creativity />
    <OfferedCourses />
    <MobileApp />
    <Footer />
    <SignIn />
  </main>
)};

export default App