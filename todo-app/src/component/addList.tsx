import { FC, useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../redux/actions";
const AddList: FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
    }
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddList;
