import InputForm from "../InputForm/InputForm";
import styles from "./Transactions.module.scss";
import { Component } from "react";

class Transactions extends Component {
  constructor(props) {
    super(props);

    this.state = { transactionsList: [] };
  }

  render() {
    const { type } = this.props;
    const { transactionsList } = this.state;
    const addTransaction = (item) => {
      this.setState({ transactionsList: [...transactionsList, item] });
    };

    return (
      <div className={styles.transactions}>
        <h2>{type === "INCOME" ? "Income" : "Outcome"}</h2>
        <InputForm type={type} onItemAdd={addTransaction} />
        <ul>
          {transactionsList.map((item) => (
            <li key={item.id}>
              {item.name} {item.amount}
            </li>
          ))}
        </ul>
        <p>
          Total {type === "INCOME" ? "income" : "outcome"}:{" "}
          {transactionsList.reduce((acc, item) => acc + Number(item.amount), 0)}
        </p>
      </div>
    );
  }
}

export default Transactions;
