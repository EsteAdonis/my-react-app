import PropTypes from 'prop-types';
import styles from './Student.module.css';

function Student(props) {
  return (
    <div className={styles.student}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>student: {props.isStudent ? "Yes": "NO"}</p>
    </div>
  )
}

Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  isStudent: PropTypes.bool
}

export default Student