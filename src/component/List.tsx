import { useSelector } from "react-redux";
import TodoItem from "./todoItem";
import { PulseLoader } from "react-spinners";
import { RootState } from "../redux/reducer";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const List = () => {
  const todos: Todo[] = useSelector(
    (state: RootState) => state.todos as unknown as Todo[]
  );
  console.log("✅ todos    ", todos);

  return (
    <div className="list-wrap">
      {todos.length === 0 ? (
          <PulseLoader className="spinner" color="#0dcaf0" />
      ) : (
        <div className="card">
          {todos.map((list) => (
            <div key={list.id}>
              <TodoItem id={list.id} text={list.text} isDone={list.isDone} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
