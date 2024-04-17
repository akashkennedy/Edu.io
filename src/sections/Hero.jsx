import Astronaut from "../assets/home/astronaut.png"
import flake1 from "../assets/home/flakes-1.png"
import Button from "../components/Button"
import flake2 from "../assets/home/flakes-2.png"


const Hero = () => {
  return (
    <section className="flex items-center justify-between px-10">
      <div className="flex flex-col justify-between gap-5">
      <img src={flake1} alt="" className="h-18 w-24 ml-5"/>
        <h2 className="text-7xl">There is a New Way to Learn More...</h2>
        <p className="info-text w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, assumenda saepe! Hic accusantium velit sapiente excepturi.</p>
        <div className="flex gap-5">
        <Button label="Sign Up"/>
        <Button label="Log In"/> 
        </div>
        <img src={flake2} alt="" className="h-18 w-24 ml-5"/>
      </div>
      <img src={Astronaut} alt="Astronaut"  className="h-[600px]"/>
    </section>
  )
}

export default Hero