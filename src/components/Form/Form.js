import ProgressBar from "./ProgressBar";
import Steps from "./Steps";
import InputForm from "./InputForm/InputForm";
import { useState } from "react";

import React from "react";

const Form = (props) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (step === 0) return;
    setStep((prev) => prev - 1);
  };

  const handleReset = (e, { resetForm }) => {
    setStep(0);
    resetForm();
  };

  return (
    <>
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
