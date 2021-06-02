import styles from "./Steps.module.css";
import Card from "../UI/Card";

const Steps = (props) => {
  return (
    <Card>
      <div className={styles["container"]}>
        <div className={`${styles.overlay} ${styles.highlight}`}>
          1. About You
        </div>
        <div
          className={`${styles.overlay} ${
            props.steps === 2 && styles.highlight
          }`}
        >
          2. About Your Company
        </div>
        <div
          className={`${styles.overlay} ${
            props.steps === 3 && styles.highlight
          }`}
        >
          3. Finishing Up
        </div>
      </div>
    </Card>
  );
};

export default Steps;
