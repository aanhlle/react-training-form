import Button from "./UI/Button";
import { Formik, Form } from "formik";

const MyTest = (props) => {
  const clickHandle = (e, bag) => {
    console.log(bag);
    console.log("handleClick!");
  };

  return (
    <Formik initialValues={{}} onSubmit={undefined}>
      {(formikBag) => (
        <Form>
          {/* <Button onClick={clickHandle(formikBag)}>Click me</Button> */}
          <Button onClick={(e) => clickHandle(e, formikBag)}>Click me</Button>
          {/* <Button value={formikBag} onClick={clickHandle}>
            Click me
          </Button> */}
        </Form>
      )}
    </Formik>
  );
};

export default MyTest;
