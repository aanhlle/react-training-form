import styles from "./InputForm.module.css";
import Card from "../UI/Card";
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import Button from '../UI/Button'

const Page1 = () => {
  return (
    <>
      
      <label htmlFor="name">Full Name</label>
        <Field name='name' type='text'/>
        <label htmlFor="email">Your Email</label>
        <Field name='email' type='email'/>
      
    </>
  )
}

const Page2 = () => {
  return (
    <>
       
        <label htmlFor="companyName">Your Company Name</label>
          <Field name='companyName' type='text'/>
          <label htmlFor="numberOfEmployees">Number of Employees</label>
          <Field name='numberOfEmployees' type='number'/>
        
    </>
  )
}

const Page3 = () => {
  return (
    <>
       
        <label for="places">From where did you hear about us?</label>
          <select id="places">
            <option>Facebook</option>
            <option>Internet</option>
            <option>Friends</option>
            <option>Email marketing</option>
          </select>
          <Field name='termsAgree' type="checkbox"/>
          <label HTMLfor="termsAgree">I accept terms & conditions</label>
        
    </>
  )
}

const InputForm = (props) => {

  return (
    <Card>
      <Formik initialValues ={{
        name: '',
        email: '',
        companyName: '',
        numberOfEmployees: 0,
        termsAgree: false
      }} onSubmit={(e)=>{console.log(e)}}>
        <Form>
        <Page1/>
        <div className={styles["button-container"]}>
        <Button className={styles["button-prev"]}>PREVIOUS</Button>
        <Button className={styles["button-next"]}>NEXT</Button>
      </div>
        </Form>
        
        
      </Formik>
    </Card>
  );
};

export default InputForm;
