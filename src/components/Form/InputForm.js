import React from "react";
import styles from "./InputForm.module.css";
import Card from "../UI/Card";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../UI/Button";

const InputForm = (props) => {
  const listFormArray = [
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

  let lastStep = listFormArray.length - 1;

  const dynamicFormGen = (step) => {
    return (
      <>
        {listFormArray[step].listField.map((field) => (
          <>
            {step === lastStep ? (
              <React.Fragment key={field.key}>
                {selectOptionGen(field.select)}

                <label className={styles.checkbox}>
                  {field.Label.label}
                  <Field name={field.name} type={field.type} />
                </label>

                <div className={styles.error}>
                  <ErrorMessage name={field.name} />
                </div>
              </React.Fragment>
            ) : (
              <React.Fragment key={field.key}>
                <label htmlFor={field.htmlFor}>{field.content}</label>
                <Field name={field.name} type={field.type} />
                <div className={styles.error}>
                  <ErrorMessage name={field.name} />
                </div>
              </React.Fragment>
            )}
          </>
        ))}
      </>
    );
  };

  const selectOptionGen = (selectArr) => {
    return selectArr.map((selectField) => {
      return (
        <React.Fragment key={selectField.key}>
          <label>{selectField.labelContent}</label>
          <select>
            {selectField.options.map((option) => (
              <option key={Math.random()}>{option}</option>
            ))}
          </select>
        </React.Fragment>
      );
    });
  };

  const stepOneValidSchema = Yup.object({
    name: Yup.string()
      .max(30, "Must be 30 characters or less")
      .required("*required"),

    email: Yup.string().email("Invalid email address").required("*required"),
  });

  const stepTwoValidSchema = Yup.object({
    companyName: Yup.string().required("*required"),
    numberOfEmployees: Yup.number()
      .typeError("Should be a valid value")
      .required("*required")
      .label("Number of Employees"),
  });

  const stepThreeValidSchema = Yup.object({
    checkbox: Yup.boolean().oneOf([true], "You have to agree to terms!"),
  });

  const schemas = [
    stepOneValidSchema,
    stepTwoValidSchema,
    stepThreeValidSchema,
  ];

  async function prevClickHandle(formikBag) {
    props.handlePrev();
    await formikBag.validateForm();
    formikBag.setTouched();
    console.log("valid: " + formikBag.isValid + "dirty: " + formikBag.dirty);
  }

  async function nextClickHandle(formikBag) {
    await formikBag.validateForm();
    console.log("valid: " + formikBag.isValid + "dirty: " + formikBag.dirty);
    if (formikBag.isValid && formikBag.dirty) {
      props.handleNext();
    }
  }

  return (
    <Formik
      validationSchema={schemas[props.step]}
      initialValues={{
        name: "",
        email: "",
        companyName: "",
        numberOfEmployees: "",
        checkbox: false,
      }}
      onSubmit={props.step === lastStep ? props.handleReset : () => {}}
    >
      {(formikBag) => (
        <Form className={styles["form-control"]}>
          <Card>{dynamicFormGen(props.step)}</Card>
          <div className={styles["button-container"]}>
            {props.step < lastStep ? (
              <>
                <Button
                  className={styles["button-prev"]}
                  onClick={() => {
                    prevClickHandle(formikBag);
                  }}
                >
                  PREVIOUS
                </Button>
                <Button
                  type="submit"
                  className={styles["button-next"]}
                  onClick={() => {
                    nextClickHandle(formikBag);
                  }}
                >
                  NEXT
                </Button>
              </>
            ) : (
              <Button type="submit">RESET</Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
