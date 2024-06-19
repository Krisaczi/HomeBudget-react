import { nanoid } from "nanoid";
import styles from "./InputForm.module.scss";
const InputForm = (props) => {
  const { type, editMode, onItemAdd, onItemCancel, item } = props;

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, amount } = event.currentTarget.elements;

    const data = {
      id: nanoid(),
      name: name.value,
      amount: amount.value,
    };
    onItemAdd(data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className={styles.inputField}
        name="name"
        type="text"
        defaultValue={editMode ? item.name : ""}
        placeholder={type === "INCOME" ? "Income type" : "Outcome type"}
        required
      />

      <input
        className={styles.inputField}
        name="amount"
        defaultValue={editMode ? item.amount : ""}
        type="number"
        min="0.01"
        step="0.01"
        required
      />
      {!editMode && <button className={styles.buttonAdd}>Add</button>}
      {editMode && <button className={styles.buttonSave}>Save</button>}
      {editMode && (
        <button
          className={styles.buttonCancel}
          onClick={() => {
            onItemCancel();
          }}
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default InputForm;
