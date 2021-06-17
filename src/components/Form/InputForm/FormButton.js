import Button from "../../UI/Button";
import styles from "./FormButton.module.css";

export default function FormButton(props) {
  return (
    <div className={styles["button-container"]}>
      {!props.isLastStep ? (
        <>
          <Button
            className={styles["button-prev"]}
            onClick={props.prevClickHandle}
          >
            PREVIOUS
          </Button>
          <Button type="submit" className={styles["button-next"]}>
            NEXT
          </Button>
        </>
      ) : (
        <Button type="submit">RESET</Button>
      )}
    </div>
  );
}
