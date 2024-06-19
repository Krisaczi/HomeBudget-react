import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import styles from "./ListItem.module.scss";

const ListItem = (props) => {
  const { item, transactionsList, setTransactionsList, type } = props;
  const [editionOpen, setEditionOpen] = useState(false);

  const handleDeleteButton = (id) => {
    setTransactionsList(transactionsList.filter((item) => item.id !== id));
  };
  const handleEditionCancel = () => {
    setEditionOpen(false);
  };

  const handleEditionSave = (data) => {
    const newItem = {
      id: item.id,
      name: data.name,
      amount: data.amount,
    };
    setTransactionsList(
      transactionsList.map((item) => (item.id === newItem.id ? newItem : item))
    );
    setEditionOpen(false);
  };
  return (
    <li className={styles.listItem}>
      {!editionOpen && (
        <>
          {item.name} {item.amount}
        </>
      )}
      <div className={styles.actionButtons}>
        {!editionOpen && (
          <>
            <button
              className={styles.buttonEdit}
              onClick={() => {
                setEditionOpen(true);
              }}
            >
              Edit
            </button>
            <button
              className={styles.buttonDelete}
              onClick={() => {
                handleDeleteButton(item.id);
              }}
            >
              Delete
            </button>
          </>
        )}
        {editionOpen && (
          <InputForm
            item={item}
            editMode={true}
            onItemCancel={handleEditionCancel}
            type={type}
            onItemAdd={handleEditionSave}
          />
        )}
      </div>
    </li>
  );
};

export default ListItem;
