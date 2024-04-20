import Button from "../components/Button"
import Mobile from "../assets/home/app.png"
import flake1 from "../assets/home/flakes-1.png"
import flake3 from "../assets/home/flakes-3.png"

const MobileApp = () => {
  return (
    <section className="px-5 flex items-center justify-between flex-col-reverse sm:flex-row pt-10 sm:px-10">
      <div className="flex flex-col gap-10">
        <img src={flake1} alt="" className="hidden sm:block h-18 w-24 ml-32"/>
        <h2 className="text-4xl sm:text-7xl">Download Our Mobile App...</h2>
        <p className="info-text w-4/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cupiditate ex quae delectus praesentium tempora voluptatem accusantium natus, recusandae atque?</p>
       <Button label="Download" className="w-full sm:w-28"/>
       <img src={flake3} alt="" className="hidden sm:block h-18 w-24"/>
      </div>
      <img src={Mobile} alt="Mobile App" className="w-full"/>
    </section>
  )
}

export default MobileApp