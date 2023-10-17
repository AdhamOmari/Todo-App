import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import style from "./styles.module.css";

const AddList: FC = () => {
  const [text, setText] = useState("");
  const [isInputVisible, setInputVisible] = useState(false);
  const [isAddButtonVisible, setAddButtonVisible] = useState(true);
  const dispatch = useDispatch();

  const handleToggleInputVisibility = () => {
    setInputVisible(!isInputVisible);
    setAddButtonVisible(false);
    if (!isInputVisible) {
      document.getElementById("new-task-input")?.focus();
    }
  };

  const handleAdd = () => {
    if (text) {
      dispatch(addTodo(text));
      setText("");
      setInputVisible(false);
      setAddButtonVisible(true);
    }
  };

  return (
    <div className={style.addListWrap}>
      <Form>
        <Form.Group className="mb-3">
          <div className={style.newTaskWrap}>
            <div
              className={style.inputContainer}
              style={{ display: isInputVisible ? "flex" : "none" }}
            >
              <input
                id="new-task-input"
                className={style.newTaskInput}
                type="text"
                placeholder="New todo"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <Button variant="outline-info" onClick={handleAdd}>
                <FontAwesomeIcon icon={faPlus} className={style.addIcon} />
              </Button>
            </div>
            {isAddButtonVisible && (
              <Button
                variant="outline-info"
                onClick={handleToggleInputVisibility}
              >
                <FontAwesomeIcon icon={faPlus} className={style.addIcon} />
              </Button>
            )}
          </div>
        </Form.Group>
      </Form>
    </div>
  );
};

export default AddList;
