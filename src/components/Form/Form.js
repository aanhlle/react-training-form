import ProgressBar from "./ProgressBar";
import Steps from "./Steps";
import InputForm from "./InputForm/InputForm";
import { useState } from "react";

import React from "react";

// import MyTest from "../MyTest";
// import MyTest from "../MyTest";

const Form = (props) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setStep(0);
  };

  return (
    <>
      {/* <MyTest /> */}
      <ProgressBar step={step} />
      <Steps step={step} />

      <InputForm
        step={step}
        handleNext={handleNext}
        handlePrev={handlePrev}
        handleReset={handleReset}
      />
    </>
  );
};

export default Form;
