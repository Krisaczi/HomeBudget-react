import { Component } from "react";
import { nanoid } from "nanoid";
import styles from "./InputForm.module.scss";

class InputForm extends Component {
  render() {
    const { type, onItemAdd } = this.props;

    const handleSubmit = (event) => {
      event.preventDefault();

      const { name, amount } = event.currentTarget.elements;
      const data = {
        id: nanoid(),
        name: name.value,
        amount: amount.value,
      };
      onItemAdd(data);
      console.log(data);
    };
    return (
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder={type === "INCOME" ? "Income type" : "Outcome type"}
        />
        <input name="amount" type="number" />
        <button>Add</button>
      </form>
    );
  }
}

export default InputForm;
