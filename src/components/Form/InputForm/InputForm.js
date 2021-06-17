import React from "react";
import { useState } from "react";
import styles from "./InputForm.module.css";
import Card from "../../UI/Card";
import { Formik, Form } from "formik";
import schemas from "./ValidSchema";
import DynamicFormGen from "./DynamicFormGen";
import FormButton from "./FormButton";

const InputForm = (props) => {
  const FORMLIST = [
    {
      id: 0,
      titleLabel: "About You",
      listField: [
        {
          key: 1,
          name: "name",
          type: "text",
          htmlFor: "name",
          content: "Full Name",
        },
        {
          key: 2,
          name: "email",
          type: "email",
          htmlFor: "email",
          content: "Your Email",
        },
      ],
    },
    {
      id: 1,
      titleLabel: "About Your Company",
      listField: [
        {
          key: 1,
          name: "companyName",
          type: "text",
          hmtlFor: "companyName",
          content: "Your Company Name",
        },
        {
          key: 2,
          name: "numberOfEmployees",
          type: "text",
          htmlFor: "numberOfEmployees",
          content: "Number of Employees",
        },
      ],
    },
    {
      id: 2,
      titleLabel: "Finishing Up",
      listField: [
        {
          key: 1,
          name: "checkbox",
          type: "checkbox",
          Label: { label: "I agree to terms & condition" },
          select: [
            {
              key: 1,
              labelContent: "From where did you hear about us?",
              options: [
                "Facebook",
                "Internet",
                "Friends",
                "Email marketing",
                "Brochure",
              ],
            },
          ],
        },
      ],
    },
  ];

  let isLastStep = props.step === FORMLIST.length - 1;

  const [snapshot, setSnapshot] = useState({
    name: "",
    email: "",
    companyName: "",
    numberOfEmployees: "",
    checkbox: false,
  });

  const prevClickHandle = (formikBag) => {
    props.handlePrev();
    formikBag.setTouched({});
    setSnapshot(formikBag.values);

    console.log(
      "PREV valid: " +
        formikBag.isValid +
        " dirty: " +
        formikBag.dirty +
        "step: " +
        props.step
    );
  };

  const submitHandle = async (values, bag) => {
    if (isLastStep) {
      props.handleReset();
      bag.resetForm();
    } else {
      bag.setTouched({});
      setSnapshot(values);
      props.handleNext();
    }
  };

  return (
    <Formik
      validationSchema={schemas[props.step]}
      initialValues={snapshot}
      onSubmit={submitHandle}
    >
      {(formikBag) => (
        <Form className={styles["form-control"]}>
          <Card>
            <DynamicFormGen
              step={props.step}
              FORMLIST={FORMLIST}
              isLastStep={isLastStep}
            />
          </Card>
          <FormButton
            step={props.step}
            isLastStep={isLastStep}
            prevClickHandle={() => prevClickHandle(formikBag)}
          />
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
