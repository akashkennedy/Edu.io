import PropTypes from "prop-types";
import Button from "../components/Button";

const OfferedCoursesCard = ({ label, src }) => {
  return (
    <div className="w-84 h-[500px] flex items-center justify-between flex-col sm:h-96 sm:w-72 border-2 border-black rounded-md card-shadow py-3">
      <img src={src} alt={label} className="h-full sm:h-60" />
      <h2 className="text-3xl">{label}</h2>
      <Button label="Learn More" className="mt-5"/>
    </div>
  );
};

OfferedCoursesCard.propTypes = {
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default OfferedCoursesCard;
