import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/actions";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";

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
      <Form>
        <Form.Group className="mb-3">
          <div className="new-task-wrap">
            <input
              className="new-task-input"
              type="text"
              placeholder=" New todo"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              variant="outline-info"
              onClick={handleAdd}
              className="form-btn"
            >
              <FontAwesomeIcon icon={faPlus}  className="add-icon"/>
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddList;
