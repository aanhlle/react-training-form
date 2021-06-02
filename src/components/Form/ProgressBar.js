import styles from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  return (
    <div className={styles.barholder}>
      <div className={styles.bar2}>33%</div>
    </div>
  );
};

export default ProgressBar;
