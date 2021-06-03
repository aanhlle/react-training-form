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
 
    </>
  );
};

export default Form;
