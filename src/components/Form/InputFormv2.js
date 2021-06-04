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
      label: [
        { htmlFor: "name", content: "Full Name" },
        { htmlFor: "email", content: "Your Email" },
      ],
      listField: [
        {
          name: "name",
          type: "text",
        },
        {
          name: "email",
          type: "email",
        },
      ],
      errorMessage: [
        { name: "name" },
        {
          name: "email",
        },
      ],
    },
    {
      id: 1,
      label: [
        { hmtlFor: "companyName", content: "Your Company Name" },
        { htmlFor: "numberOfEmployees", content: "Number of Employees" },
      ],
      listField: [
        { name: "companyName", type: "text" },
        { name: "numberOfEmployees" },
      ],
      errorMessage: [{ name: "companyName" }, { name: "numberofEmployees" }],
    },
    {
      id: 2,
      label: [{ for: "places", content: "From where did you hear about us?" }],
      select: [
        { option: ["Facebook", "Internet", "Friends", "Email marketing"] },
      ],
      listField: [
        {
          name: "checkbox",
          type: "checkbox",
          component: "CheckboxWithLabel",
          Label: { label: "I agree to terms & condition" },
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

  const dynamicFormGen = (step) => {
    return Object.keys(listFormArray[step]).map();
  };

  return null;
};
