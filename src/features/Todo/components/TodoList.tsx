// todoリスト一覧を表示するコンポーネント

import TodoItem from "./TodoItem";
import { Todo } from "../../../types/Todotype";
import "../../../sass/TodoList.scss";

export type TodoListProps = {
  items: Todo[];
  onDelete: (id: string) => void;
  toggleComplete: (id: string) => void;
};

const TodoList: React.FC<TodoListProps> = ({
  items,
  onDelete,
  toggleComplete,
}) => {
  return (
    <ul>
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onDelete={onDelete}
          toggleComplete={toggleComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
