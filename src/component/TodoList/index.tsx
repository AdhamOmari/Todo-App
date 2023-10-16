import { useSelector } from "react-redux";
import TodoItem from "../TodoItem";
import { RootState } from "../../redux/reducer";
import TodoProgressBar from "../TodoProgressBar";
import { useEffect } from "react";
import style from "./styles.module.css";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const List = () => {
  const todos: Todo[] = useSelector(
    (state: RootState) => state.todos as unknown as Todo[]
  );
  const filteredTodos: Todo[] = useSelector(
    (state: RootState) => state.filteredTodos as unknown as Todo[]
  );
  console.log("✅ todos    ", todos);

  const completedTodos = todos.filter((todo) => todo.isDone);
  const progress = (completedTodos.length / todos.length) * 100;
  useEffect(() => {}, [progress]);
  console.log('✅ progress    ', progress)
  

  return (
    <div className={style["list-wrap"]}>
      <TodoProgressBar progress={progress} />
      <div className={style.card}>
        {(filteredTodos?.length > 0  ? filteredTodos : todos).map((todo) => (
          <div key={todo.id}>
            <TodoItem id={todo.id} text={todo.text} isDone={todo.isDone} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
