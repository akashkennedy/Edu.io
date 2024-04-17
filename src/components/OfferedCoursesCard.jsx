import PropTypes from "prop-types";
import Button from "../components/Button";

const OfferedCoursesCard = ({ label, src }) => {
  return (
    <div className="flex flex-col items-center justify-between h-96 w-72 border-2 border-black rounded-md card-shadow py-3">
      <img src={src} alt={label} className="h-60" />
      <h2 className="text-3xl">{label}</h2>
      <Button label="Learn More" />
    </div>
  );
};

OfferedCoursesCard.propTypes = {
  label: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default OfferedCoursesCard;
