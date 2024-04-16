import PropTypes from "prop-types"

const Button = ({label}) => {
  return (
   <button className="bg-black text-white h-12 font-semibold w-28 rounded-lg button-shadow">
    {label}
   </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button