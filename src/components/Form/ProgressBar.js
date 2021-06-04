import styles from "./ProgressBar.module.css";

const ProgressBar = (props) => {
  const barHandler = (step) => {
    switch (step) {
      case 0:
        return <div className={styles.bar0}>1/3</div>;
      case 1:
        return <div className={styles.bar1}>2/3</div>;
      case 2:
        return <div className={styles.bar2}>3/3</div>;
      default:
        return <div className={styles.bar0}>1/3</div>;
    }
  };

  return <div className={styles.barholder}>{barHandler(props.step)}</div>;
};

export default ProgressBar;
