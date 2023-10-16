import { FC } from "react";
import List from "./component/List";
import "./App.css";
import SearchComponent from "./component/SearchComponent";
import AddList from "./component/addList";

const App: FC = () => {
  return (
    <div className="app-container">
<h1 className="todo-hiding"> Todo </h1>
<SearchComponent />

      <div className="app-wrap">
        <List />
        <AddList />

      </div>
    </div>
  );
};

export default App;
