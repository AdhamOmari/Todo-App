import { FC } from "react";
import List from "./component/List";
import "./App.css";
import SearchComponent from "./component/SearchComponent";
import AddList from "./component/addList";

const App: FC = () => {
  return (
    <div className="app-container">
      <h1>My Todo List</h1>
      <div className="app-wrap">
        <SearchComponent />
        <AddList />
        <List />
      </div>
    </div>
  );
};

export default App;
