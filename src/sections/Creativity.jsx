import Artist from "../assets/home/artist.png"
import Button from "../components/Button"
import flake1 from "../assets/home/flakes-1.png"
import flake2 from "../assets/home/flakes-2.png"

const Creativity = () => {
  return (
    <section className="flex justify-between items-center gap-10 px-10">
      <img src={Artist} alt="Artist" className="w-full"/>
      <div className="flex flex-col justify-between gap-10">
        <img src={flake1} alt="" className="h-18 w-24 mr-5" />
        <h2 className="text-7xl">We Know How to Build Your Creativity...</h2>
        <p className="info-text w-4/5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus asperiores accusantium voluptatibus a adipisci veritatis, deserunt architecto numquam sequi quod quas neque alias, corrupti dolores deleniti commodi nostrum mollitia totam!</p>
        <Button label="Get Started!" className="w-60"/>
        <img src={flake2} alt="" className="h-18 w-24 ml-5 rotate-12 relative bottom-5 left-96"/>
      </div>
    </section>
  )
}

export default Creativity