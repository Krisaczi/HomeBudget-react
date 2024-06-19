import { useState } from "react";
import styles from "./App.module.scss";
import Transactions from "./components/Transactions/Transactions";

function App() {
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const difference = (income - outcome).toFixed(2);

  const h1Style = {
    color: difference >= 0 ? "green" : "red",
    // Other styles (font-size, padding, etc.) go here
  };
  const h1Text =
    difference >= 0
      ? `You have ${difference} left`
      : `Stop spending money!!! You are ${difference} in red `;
  return (
    <div className={styles.container}>
      <h1 className={styles.heading} style={h1Style}>
        {" "}
        {h1Text}
      </h1>
      <div className={styles.transactions}>
        {" "}
        <Transactions total={setIncome} type="INCOME" />
        <Transactions total={setOutcome} type="OUTCOME" />
      </div>
    </div>
  );
}

export default App;
