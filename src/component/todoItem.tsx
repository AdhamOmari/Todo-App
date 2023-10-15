import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, isDoneTodo } from "../redux/actions";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faEdit,
  faCheck,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  id: number;
  text: string;
  isDone: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, isDone }) => {
  console.log("✅ element    ", isDone);

  const [flag, setFlag] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(text);
  const dispatch = useDispatch();
  const [stateDone, setIsDone] = useState<boolean>(false);

  const handleEdit = () => {
    setFlag(!flag);
  };

  const saveTitle = () => {
    dispatch(editTodo(id, newTitle));
    setFlag(false);
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
  };

  const handelIsDone = () => {
    setIsDone(!stateDone);
    dispatch(isDoneTodo(id, stateDone));
  };

  useEffect(() => {}, [newTitle, stateDone]);

  return (
    <Card>
      <Card.Header>Todo</Card.Header>
      <Card.Body>
        {flag ? (
          <div className="save-change ">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
       
            />
            <button
              className="btn btn-outline-info save-button"
              onClick={saveTitle}
            >
              <FontAwesomeIcon icon={faSave} />
            </button>
          </div>
        ) : (
          <div>
            <Card.Title
              style={{ textDecoration: stateDone ? "line-through" : "none" }}
            >
              {newTitle}
            </Card.Title>
            <div className="button-wrap">
              {!stateDone ? (
                <>
                  <button
                    onClick={handleEdit}
                    className="btn btn-warning edit-button"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                  <button
                    onClick={handleDelete}
                    className="btn btn-danger delete-button"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                  <button
                    onClick={handelIsDone}
                    className="btn btn-success done-button"
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </>
              ) : (
                <button
                  onClick={handelIsDone}
                  className="btn btn-success done-button"
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
              )}
            </div>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};

export default TodoItem;
