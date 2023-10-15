import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

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
    <div className="add-list-wrap">
      <InputGroup className="mb-3">
        <FormControl
        className="new-task-input"
          type="text"
          placeholder="Enter a new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button variant="outline-info" onClick={handleAdd}>
          <FontAwesomeIcon icon={faPlus} /> 
        </Button>
      </InputGroup>
    </div>
  );
};

export default AddList;
