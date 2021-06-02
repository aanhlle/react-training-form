import styles from "./Form.module.css";
import ProgressBar from "./ProgressBar";
import Steps from "./Steps";
import InputForm from "./InputForm";
import Button from "../UI/Button";
import React from "react";

const Form = (props) => {
  return (
    <>
      <ProgressBar />
      <Steps />
      <InputForm />
      <div className={styles["button-container"]}>
        <Button className={styles["button-prev"]}>PREVIOUS</Button>
        <Button className={styles["button-next"]}>NEXT</Button>
      </div>
    </>
  );
};

export default Form;
