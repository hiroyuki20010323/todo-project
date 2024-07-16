import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import AddTodoForm from "./features/Todo/components/AddTodoForm";
import TodoList from "./features/Todo/components/TodoList";
import ToggleStatusButton from "./features/Todo/components/ToggleStatusButton";
import { Todo } from "./types/Todotype";

// import TodoItem from "./features/Todo/components/TodoItem";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = window.localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [isCompleted, setIsComplated] = useState(false);

  // useEffectでToDoリストの状態が更新されるたびにローカルストレージに保存
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = todos.filter((todo) => todo.completed === isCompleted);

  // 現在のisCompletedの状態を反転させる。NOT演算子で真偽値の反転をさせる。
  const toggleCompletion = () => {
    setIsComplated(!isCompleted);
  };

  // 現在のtodosの状態に、addtodoformで入力された値をnewTodosというプロパティを持つオブジェクトに変換して、todosに追加する。textのみ引数で受け取る。
  const handleAddTodo = (text: string) => {
    const newTodos = {
      id: uuidv4(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodos]);
  };

  // todoitemのidが違う値のみで配列を作り直す。todo.id != idで評価している。削除したい、アイテムのidを引数として受け取り現在のtodosのidと評価する。
  const handleDeleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  // todoitemのcompletedの状態を反転（トグル）させる。アイテムのidを引数で受け取り、
  // 各アイテムのidと比較し、同じid、即ち、同じアイテムの要素のcompletedのbooleanを反転させる。反転させたいアイテムと異なったアイテムはそのままにする。これによって完了と未完了を変更する。
  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };
  return (
    <div className="App">
      <header>
        <AddTodoForm onAdd={handleAddTodo} />
      </header>
      <main>
        <ToggleStatusButton
          isCompleted={isCompleted}
          onToggle={toggleCompletion}
        />
        <TodoList
          onDelete={handleDeleteTodo}
          toggleComplete={toggleComplete}
          items={filteredTodos}
        />
      </main>
    </div>
  );
};

export default App;
