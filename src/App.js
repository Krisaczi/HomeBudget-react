import { useState } from "react";
import styles from "./App.module.scss";

import clsx from "clsx";
import Transactions from "./components/Transactions/Transactions";

function App() {
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  const difference = (income - outcome).toFixed(2);

  const totalStyle = {
    className: difference >= 0 ? "totalGreen" : "totalRed",
  };
  const totalText =
    difference >= 0
      ? `You have ${difference} left`
      : `Stop spending money!!! You are ${difference} in red `;

  const showTotal = income > 0 || outcome > 0;
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Your personal home budget calculator</h1>
        <div className={styles.logo}></div>
        {showTotal && (
          <h2 className={clsx(styles.heading, totalStyle.className)}>
            {totalText}
          </h2>
        )}
      </header>
      <section className={styles.transactions}>
        {" "}
        <Transactions total={setIncome} type="INCOME" />
        <Transactions total={setOutcome} type="OUTCOME" />
      </section>
    </div>
  );
}

export default App;
