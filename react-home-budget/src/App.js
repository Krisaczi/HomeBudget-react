import "./App.css";
import Transactions from "./components/Transactions/Transactions";

function App() {
  return (
    <div className="container">
      <Transactions type="INCOME" />
      <Transactions type="OUTCOME" />
    </div>
  );
}

export default App;
