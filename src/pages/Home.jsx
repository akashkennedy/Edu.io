import {  Hero, Creativity, OfferedCourses, MobileApp, Footer } from "../index.js"


const Home = () => {
  return (
    <main className="h-screen">
    <Hero />
    <Creativity />
    <OfferedCourses />
    <MobileApp />
    <Footer />
  </main>
  )
}

export default Home