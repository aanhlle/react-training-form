import React from "react";
import { Field, ErrorMessage } from "formik";
import styles from "./InputForm.module.css";

const dropDownGen = (selectArr) => {
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

export default function dynamicFormGen(props) {
  return (
    <>
      {props.FORMLIST[props.step].listField.map((field) => (
        <React.Fragment key={field.key}>
          {props.isLastStep ? (
            <>
              {dropDownGen(field.select)}

              <label className={styles.checkbox}>
                {field.Label.label}
                <Field name={field.name} type={field.type} />
              </label>

              <div className={styles.error}>
                <ErrorMessage name={field.name} />
              </div>
            </>
          ) : (
            <>
              <label htmlFor={field.htmlFor}>{field.content}</label>
              <Field name={field.name} type={field.type} />
              <div className={styles.error}>
                <ErrorMessage name={field.name} />
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </>
  );
}
