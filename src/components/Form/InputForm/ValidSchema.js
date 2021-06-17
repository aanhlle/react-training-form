import * as Yup from "yup";

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

const schemas = [stepOneValidSchema, stepTwoValidSchema, stepThreeValidSchema];

export default schemas;
