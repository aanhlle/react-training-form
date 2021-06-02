import styles from "./InputForm.module.css";
import Card from "../UI/Card";

const InputForm = (props) => {
  if (props.step === "secondStep") {
    return (
      <Card>
        <form>
          <label>Your Company Name</label>
          <input type="text"></input>
          <label>Number of Employees</label>
          <input type="email"></input>
        </form>
      </Card>
    );
  }
  if (props.step === "thirdStep") {
    return (
      <Card>
        <form>
          <label for="places">From where did you hear about us?</label>
          <select id="places">
            <option>Facebook</option>
            <option>Internet</option>
            <option>Friends</option>
            <option>Email marketing</option>
          </select>
          <input type="checkbox" id="terms" />
          <label for="terms">I accept terms & conditions</label>
        </form>
      </Card>
    );
  }

  return (
    <Card>
      <form className={styles["form-control"]}>
        <label>Full Name</label>
        <input type="text"></input>
        <label>Your Email</label>
        <input type="email"></input>
      </form>
    </Card>
  );
};

export default InputForm;
