import { useState } from "react";
import "./App.css";
import Transactions from "./components/Transactions/Transactions";

function App() {
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);
  return (
    <div className="container">
      <h1>You have: {income - outcome}</h1>
      <div>
        {" "}
        <Transactions total={setIncome} type="INCOME" />
        <Transactions total={setOutcome} type="OUTCOME" />
      </div>
    </div>
  );
}

export default App;
