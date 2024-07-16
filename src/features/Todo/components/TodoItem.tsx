// 各todoアイテムを表示するためのコンポーネント
// import TodoList from "./TodoList";
import { Todo } from "../../../types/Todotype";
import "../../../sass/TodoItem.scss";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckSharpIcon from "@mui/icons-material/CheckSharp";
type TodoItemProps = {
  item: Todo;
  onDelete: (id: string) => void;
  toggleComplete: (id: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({
  item,
  onDelete,
  toggleComplete,
}) => {
  return (
    <li className="item" onClick={() => toggleComplete(item.id)}>
      {item.completed && (
        <span>
          <CheckSharpIcon />
        </span>
      )}
      <p className={item.completed ? "completed" : ""}>{item.text}</p>
      <button
        onClick={(event) => {
          event.stopPropagation();
          onDelete(item.id);
        }}
      >
        <DeleteIcon style={{ color: "#ff2b00" }} />
      </button>
    </li>
  );
};

export default TodoItem;
