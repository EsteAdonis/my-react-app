import PropTypes from 'prop-types';

function Button() {

  const styles = {
      backgroundColor: "hsl(200, 100%, 50%)",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      border: "none",
      cursor: "pointer",
  }    

  return (
    <button style={styles}>Click me</button>
  )
}

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  onclick: PropTypes.func
}

export default Button

