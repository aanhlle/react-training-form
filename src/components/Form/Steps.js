import styles from "./Steps.module.css";
import Card from "../UI/Card";

const Steps = (props) => {
  return (
    <Card className={styles["container"]}>
      <div
        className={`${styles.overlay} ${
          props.step === 0 ? styles.highlight : styles.complete
        }`}
      >
        1. About You
      </div>
      <div
        className={`${styles.overlay} ${props.step === 1 && styles.highlight} ${
          props.step > 1 && styles.complete
        }`}
      >
        2. About Your Company
      </div>
      <div
        className={`${styles.overlay} ${props.step === 2 && styles.highlight}`}
      >
        3. Finishing Up
      </div>
    </Card>
  );
};

export default Steps;
