import { FC } from "react";
import List from "./component/List";
import "./App.css";
import SearchComponent from "./component/SearchComponent";
import AddList from "./component/addList";

const App: FC = () => {
  return (
    <div className="app-container">
      <header>
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
