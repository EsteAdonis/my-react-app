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

export default Student