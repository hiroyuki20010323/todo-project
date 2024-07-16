// 新規TODOアイテムを入力するためのコンポーネント

import { useState } from "react";
import "../../../sass/AddTodoForm.scss";

type AddTodoFormProps = {
  onAdd: (text: string) => void;
};

const AddTodoForm = ({ onAdd }: AddTodoFormProps) => {
  const [text, setText] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (text.trim() !== "") {
      onAdd(text);
      setText("");
    }
  };

  return (
    <div className="addForm">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Item"
          value={text}
          onChange={handleChange}
        />
        <button type="submit">
          +{/* <span className="material-symbols-outlined">add_circle</span> */}
        </button>
      </form>
    </div>
  );
};

export default AddTodoForm;
