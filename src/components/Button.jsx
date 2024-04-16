import PropTypes from "prop-types"

const Button = ({label, className}) => {
  return (
   <button className={`bg-black text-white h-12 font-semibold w-28 rounded-lg button-shadow ${className}`}>
    {label}
   </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button