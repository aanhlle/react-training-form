import styles from "./InputForm.module.css";
import Card from "../UI/Card";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../UI/Button";
import { useState } from "react";

const StepOne = () => {
  return (
    <>
      <Card>
        <label htmlFor="name">Full Name</label>
        <Field name="name" type="text" />
        <ErrorMessage name="name" />
        <label htmlFor="email">Your Email</label>
        <Field name="email" type="email" />
        <ErrorMessage name="email" />
      </Card>
    </>
  );
};

const stepOneValidSchema = Yup.object({
  name: Yup.string()
    .max(30, "Must be 30 characters or less")
    .required("Required"),

  email: Yup.string().email("Invalid email address").required("Required"),
});

const StepTwo = () => {
  return (
    <>
      <Card>
        <label htmlFor="companyName">Your Company Name</label>
        <Field name="companyName" type="text" />
        <ErrorMessage name="companyName" />
        <label htmlFor="numberOfEmployees">Number of Employees</label>
        <Field name="numberOfEmployees" />
        <ErrorMessage name="numberOfEmployees" />
      </Card>
    </>
  );
};

const stepTwoValidSchema = Yup.object({
  companyName: Yup.string().required("Required"),
  numberOfEmployees: Yup.number()
    .typeError("Should be a valid value")
    .required("Required")
    .label("Number of Employees"),
});

const StepThree = () => {
  return (
    <>
      <Card>
        <label for="places">From where did you hear about us?</label>
        <select id="places">
          <option>Facebook</option>
          <option>Internet</option>
          <option>Friends</option>
          <option>Email marketing</option>
        </select>
        <Field name="termsAgree" type="checkbox" />
        <label HTMLfor="termsAgree">I accept terms & conditions</label>
      </Card>
    </>
  );
};

const pages = [<StepOne />, <StepTwo />, <StepThree />];
const schemas = [stepOneValidSchema, stepTwoValidSchema];

const InputForm = (props) => {
  const [step, setStep] = useState(0);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setStep((prev) => prev - 1);
  };

  const handleReset = (e, { resetForm }) => {
    setStep(0);
    resetForm();
  };

  return (
    <Formik
      validationSchema={schemas[step]}
      initialValues={{
        name: "",
        email: "",
        companyName: "",
        numberOfEmployees: "",
        termsAgree: false,
      }}
      onSubmit={handleReset}
    >
      <Form className={styles["form-control"]}>
        {pages[step]}
        <div className={styles["button-container"]}>
          {step < pages.length - 1 ? (
            <>
              <Button className={styles["button-prev"]} onClick={handlePrev}>
                PREVIOUS
              </Button>
              <Button className={styles["button-next"]} onClick={handleNext}>
                NEXT
              </Button>
            </>
          ) : (
            <Button type="submit">RESET</Button>
          )}
        </div>
      </Form>
    </Formik>
  );
};

export default InputForm;
