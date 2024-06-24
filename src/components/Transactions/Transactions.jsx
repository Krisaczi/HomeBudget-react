import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import styles from "./Transactions.module.scss";
import ListItem from "../ListItem/ListItem";

const Transactions = (props) => {
  const { type, total } = props;
  const [transactionsList, setTransactionsList] = useState([]);

  const handleChangeTransactionsList = (list) => {
    setTransactionsList(list);
    total(list.reduce((acc, item) => acc + Number(item.amount), 0));
  };

  const addTransaction = (item) => {
    handleChangeTransactionsList([...transactionsList, item]);
  };

  const totalAmount = transactionsList.reduce(
    (acc, item) => acc + Number(item.amount),
    0
  );
  const decimals = totalAmount.toFixed(2);
  return (
    <div className={styles.transactions}>
      <h2>{type === "INCOME" ? "Income" : "Outcome"}</h2>
      <p>
        Total {type === "INCOME" ? "income" : "outcome"}: {decimals}
      </p>
      <InputForm type={type} onItemAdd={addTransaction} />
      <ul className={styles.list}>
        {transactionsList.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            transactionsList={transactionsList}
            setTransactionsList={handleChangeTransactionsList}
            type={type}
          />
        ))}
      </ul>
    </div>
  );
};

export default Transactions;
