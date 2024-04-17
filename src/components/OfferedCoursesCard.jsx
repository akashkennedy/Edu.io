import Button from "../components/Button"
// import CourseData from "../constants/Coursedata"
import Science from "../assets/home/science.png"

const OfferedCoursesCard = () => {
  return (
    <div className="flex flex-col items-center justify-between h-96 w-72 border-2 border-black rounded-md card-shadow py-3">
        <img src={Science} alt="Chemistry" className="h-60"/>
        <h2 className="text-3xl">Chemistry</h2>
        <Button className=""label="Learn More"/> 
    </div>
  )
}

export default OfferedCoursesCard