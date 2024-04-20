import Artist from "../assets/home/artist.png"
import Button from "../components/Button"
import flake1 from "../assets/home/flakes-1.png"
import flake2 from "../assets/home/flakes-2.png"

const Creativity = () => {
  return (
    <section className="flex flex-col px-5 mt-5 sm:justify-between items-center gap-10 sm:px-10">
      <img src={Artist} alt="Artist" className="size-86 sm:w-full"/>
      <div className="flex flex-col justify-between gap-10">
        <img src={flake1} alt="" className="hidden sm:h-18 w-24 mr-5" />
        <h2 className=" text-4xl sm:text-7xl">We Know How to Build Your Creativity...</h2>
        <p className="info-text w-full sm:w-4/5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores accusantium voluptatibus a adipisci veritatis, deserunt architecto numquam sequi quod quas neque alias, corrupti dolores deleniti commodi nostrum mollitia totam!</p>
        <Button label="Get Started!" className="w-full sm:w-60"/>
        <img src={flake2} alt="" className="hidden sm:h-18 w-24 ml-5 rotate-12 relative bottom-5 left-96"/>
      </div>
    </section>
  )
}

export default Creativity