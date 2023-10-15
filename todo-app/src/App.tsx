import { FC } from "react";
import AddList from "./component/addList";

const App: FC = () => {
  return (
    <div className="app">
      <h1>My Todo List </h1>
      <AddList />
    </div>
  );
};

export default App;
