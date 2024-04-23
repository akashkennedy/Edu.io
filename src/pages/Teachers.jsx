import { teachers } from "../constants/teachersData.js";
import TeacherCard from "../components/TeacherCard.jsx";
import Button from "../components/Button.jsx";

const Teachers = () => {
  return (
    <section className="py-5 flex flex-col justify-around items-center gap-10 sm:h-screen">
      <div>
        <h2 className="text-4xl sm:text-7xl underline underline-offset-8 decoration-cyan decoration-8">
          Our Teachers
        </h2>
      </div> 
      <div className="grid place-items-center gap-5 sm:grid-cols-3 sm:gap-10">
        {teachers.map((teacher) => (
          <TeacherCard
            key={teacher.id}
            title={teacher.name}
            src={teacher.src}
          />
        ))}
      </div>
      <Button label="Learn More" />
    </section>
  );
};

export default Teachers;
