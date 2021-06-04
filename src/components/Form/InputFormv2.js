import styles from "./InputForm.module.css";
import Card from "../UI/Card";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../UI/Button";
import { CheckboxWithLabel } from "formik-material-ui";

export const InputFormv2 = (props) => {
  const listFormArray = [
    {
      id: 0,
      titleLabel: "About You",
      listField: [
        {
          name: "name",
          type: "text",
          htmlFor: "name",
          content: "Full Name",
          errorMessage: "name",
        },
        {
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
          name: "companyName",
          type: "text",
          hmtlFor: "companyName",
          content: "Your Company Name",
          errorMessage: "companyName",
        },
        {
          name: "numberOfEmployees",
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
          name: "checkbox",
          type: "checkbox",
          component: "CheckboxWithLabel",
          Label: { label: "I agree to terms & condition" },
        },
      ],
      select: [
        {
          labelContent: "From where did you hear about us?",
          option: ["Facebook", "Internet", "Friends", "Email marketing"],
        },
      ],
    },
  ];

  // const DyanamicForm = () => {
  //   return(
  //    {
  //      listForm.map((form,indexForm) => (
  //      {count === indexForm && ( <div>
  //       <div>{{form.label}}</div>
  //       {form.listField.map((field) => (
  //         <Input></Input>
  //       ))}
  //     </div>)}
  //      ))
  //    }
  //   )
  // }

  //   {listField.map((item) => (
  //     <>
  //     <label htmlFor="item.label">Full Name</label>
  // <Field name="name" type="item.type" />
  // <ErrorMessage name="name" />
  // </>
  // ))}

  const dynamicFormGen = (step) => {
    return listFormArray.map((form) => {
      return form.label.map((label, index) => {
        let listFieldname = listFormArray.return(
          <>
            <label htmlFor={label.htmlFor}>Full Name</label>
            <Field name="name" type="text" />
            <ErrorMessage name="name" />
          </>
        );
      });
    });
  };

  return null;
};
