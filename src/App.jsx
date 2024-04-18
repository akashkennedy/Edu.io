import { Navbar, Hero, Creativity, OfferedCourses, MobileApp, Footer } from "./index.js"


const App = () => {
  return (
  <main className="h-screen">
    <Navbar />
    <Hero />
    <Creativity />
    <OfferedCourses />
    <MobileApp />
    <Footer />
  </main>
)};

export default App