import { teachers } from "../constants/teachersData.js";
import TeacherCard from "../components/TeacherCard.jsx";
import Button from "../components/Button.jsx";

const Teachers = () => {
  return (
    <section className="flex flex-col justify-between items-center gap-10">
      <div>
        <h2 className="text-7xl text-center underline decoration-cyan decoration-8">
          Our Teachers
        </h2>
      </div>
      <div className="grid grid-cols-3 gap-10">
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
