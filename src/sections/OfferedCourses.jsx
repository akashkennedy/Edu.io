import OfferedCoursesCard from "../components/OfferedCoursesCard";
import Button from "../components/Button";
import flake3 from "../assets/home/flakes-3.png"
import flake2 from "../assets/home/flakes-2.png"
import CourseData from "../constants/CourseData.js"

const OfferedCourses = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-between relative pt-16 px-10">
      <img src={flake3} className="h-18 w-24 absolute bottom-7 right-32"/>
      <img src={flake3} className="h-18 w-24 absolute left-10 top-28"/>
      <div>
        <h2 className="text-7xl text-center underline decoration-cyan decoration-8">Our Offered Courses</h2>
      </div>
      <div className="flex gap-16">
        {CourseData.map(card => (
          <OfferedCoursesCard key={card.id} src={card.src} label={card.title}/>
        ))}
      </div>
      <img src={flake2} className="h-18 w-24 absolute left-24 bottom-10 rotate-45"/>
      <Button label="See Full List"/>
    </section>
  );
};



export default OfferedCourses;
