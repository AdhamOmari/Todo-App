import { useSelector } from "react-redux";
import TodoItem from "./todoItem";
import { PulseLoader } from "react-spinners";
import SearchComponent from "./SearchComponent";

interface Todo {
  id: number;
  text: string;
  isDone: boolean;
}

const List = () => {
  const todos: Todo[] = useSelector((state) => state.todos);
  console.log("✅ todos    ", todos);

  return (
    <div className="list-wrap">
      <div className="card">
        {todos.length === 0 ? (
          <PulseLoader   className="spinner"/>
        ) : (
          todos.map((list) => (
            <div key={list.id}>
              <TodoItem id={list.id} text={list.text} isDone={list.isDone} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default List;
