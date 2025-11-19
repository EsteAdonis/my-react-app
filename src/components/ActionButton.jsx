import PropTypes from "prop-types";

export const ActionButton = ({ text, myOnClick }) => {
	return <button onClick={myOnClick}>{text}</button>;
}

ActionButton.propTypes = {
  text: PropTypes.string.isRequired,
  myOnClick: PropTypes.func.isRequired,
};