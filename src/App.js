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

  const showH1 = income > 0 || outcome > 0;
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Your personal home budget calculator</h1>
      <div className={styles.logo}></div>
      {showH1 && (
        <h2 className={styles.heading} style={h1Style}>
          {h1Text}
        </h2>
      )}

      <div className={styles.transactions}>
        {" "}
        <Transactions total={setIncome} type="INCOME" />
        <Transactions total={setOutcome} type="OUTCOME" />
      </div>
    </div>
  );
}

export default App;
