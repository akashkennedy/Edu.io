import PropTypes from "prop-types";

const OfferedCoursesCard = ({ title, src }) => {
  return (
    <div className="flex flex-col items-center justify-around size-56 aspect-square border-2 border-black cursor-pointer  rounded-md card-shadow py-3">
      <img src={src} alt={title} className="h-40" />
      <h2 className="text-3xl">{title}</h2>
    </div>
  );
};

OfferedCoursesCard.propTypes = {
  title: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};

export default OfferedCoursesCard;
