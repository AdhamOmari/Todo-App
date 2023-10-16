import { FC } from "react";
import List from "./component/TodoList";
import "./App.css";
import SearchComponent from "./component/Header";
import AddList from "./component/TodoInput";

const App: FC = () => {
  return (
    <div className="app-container">
      <header className="header-container">
        <h1 className="todo-hiding"> Todo </h1>
        <SearchComponent />
      </header>

      <main>
        <div className="app-wrap">
          <List />
          <AddList />
        </div>
      </main>
    </div>
  );
};

export default App;
