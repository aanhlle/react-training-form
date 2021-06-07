import React from "react";
import styles from "./InputForm.module.css";
import Card from "../UI/Card";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../UI/Button";
import { CheckboxWithLabel } from "formik-material-ui";

const InputFormv2 = (props) => {
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
          errorMessage: "name",
        },
        {
          key: 2,
          name: "email",
          type: "email",
          htmlFor: "email",
          content: "Your Email",
          errorMessage: "email",
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
          errorMessage: "companyName",
        },
        {
          key: 2,
          name: "numberOfEmployees",
          type: "text",
          htmlFor: "numberOfEmployees",
          content: "Number of Employees",
          errorMessage: "companyName",
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

  const dynamicFormGen = (step) => {
    return listFormArray[step].listField.map((field) => {
      let lastStep = listFormArray.length - 1;
      if (step === lastStep) {
        return (
          <React.Fragment key={field.key}>
            {selectOptionGen(field.select)}

            <Field
              style={{ display: "block" }}
              component={CheckboxWithLabel}
              type={field.type}
              name={field.name}
              Label={field.Label}
            />
          </React.Fragment>
        );
      }

      return (
        <React.Fragment key={field.key}>
          <label htmlFor={field.htmlFor}>{field.content}</label>
          <Field name={field.name} type={field.type} />
          <ErrorMessage name={field.name} />
        </React.Fragment>
      );
    });
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
      .required("Required"),

    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const stepTwoValidSchema = Yup.object({
    companyName: Yup.string().required("Required"),
    numberOfEmployees: Yup.number()
      .typeError("Should be a valid value")
      .required("Required")
      .label("Number of Employees"),
  });

  const schemas = [stepOneValidSchema, stepTwoValidSchema];
  return (
    <Formik
      validationSchema={schemas[props.step]}
      initialValues={{
        name: "",
        email: "",
        companyName: "",
        numberOfEmployees: "",
        termsAgree: false,
      }}
      onSubmit={props.handleReset}
    >
      <Form className={styles["form-control"]}>
        <Card>{dynamicFormGen(props.step)}</Card>
        <div className={styles["button-container"]}>
          {props.step < listFormArray.length - 1 ? (
            <>
              <Button
                className={styles["button-prev"]}
                onClick={props.handlePrev}
              >
                PREVIOUS
              </Button>
              <Button
                className={styles["button-next"]}
                onClick={props.handleNext}
              >
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

export default InputFormv2;
