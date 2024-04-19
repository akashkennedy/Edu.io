import Astronaut from "../assets/home/astronaut.png"
import flake1 from "../assets/home/flakes-1.png"
import Button from "../components/Button"
import flake2 from "../assets/home/flakes-2.png"


const Hero = () => {
  return (
    <section className="flex flex-col-reverse gap-5 px-5 sm:flex-row items-center justify-between sm:px-10">
      <div className="flex flex-col justify-between gap-5">
      <img src={flake1} className="hidden sm:h-18 w-24 ml-5"/>
        <h2 className="text-4xl sm:text-7xl">There is a New Way to Learn More...</h2>
        <p className="w-full info-text sm:w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sequi Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, assumenda saepe! Hic accusantium velit sapiente excepturi.</p>
        <div className="w-full flex flex-col gap-5 sm:flex-row">
        <Button label="Sign Up" className="w-full sm:w-28"/>
        <Button label="Log In" className="w-full sm:w-28"/> 
        </div>
        <img src={flake2}  className="hidden sm:h-18 w-24 ml-5"/>
      </div>
      <img src={Astronaut} alt="Astronaut"  className="size-86 sm:h-[600px]"/>
    </section>
  )
}

export default Hero