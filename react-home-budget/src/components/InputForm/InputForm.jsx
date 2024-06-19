import { nanoid } from "nanoid";

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
        name="name"
        type="text"
        defaultValue={editMode ? item.name : ""}
        placeholder={type === "INCOME" ? "Income type" : "Outcome type"}
      />
      <input
        name="amount"
        defaultValue={editMode ? item.amount : ""}
        type="number"
      />
      {!editMode && <button>Add</button>}
      {editMode && <button>Save</button>}
      {editMode && (
        <button
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
