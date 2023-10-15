import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, isDoneTodo } from "../redux/actions";
import Card from "react-bootstrap/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { writeText } from "clipboard-polyfill";
import Tooltip from "react-bootstrap/Tooltip";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import {
  faTrash,
  faEdit,
  faCheck,
  faSave,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

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
    Swal.fire({
      icon: "success",
      title: "Success",
      text: "Todo edited successfully",
      showConfirmButton: false,
      timer: 2000,
    });
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    Swal.fire({
      icon: "error",
      title: "Delete",
      timer: 2000,
      showConfirmButton: false,
      text: "Todo deleted successfully",
    });
  };

  const handelIsDone = () => {
    setIsDone(!stateDone);
    dispatch(isDoneTodo(id, stateDone));
    stateDone
      ? ""
      : Swal.fire({
          icon: "success",
          title: "Done",
          text: "Todo status is updated successfully",

          background: "#f0f0f0",
        });
  };
  const handleCopy = () => {
    const todoListText = newTitle;

    writeText(todoListText)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Todo list copied to clipboard",
          customClass: {
            confirmButton: "btn btn-outline-info",
          },
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Copy failed",
        });
        console.error("Copy failed", err);
      });
  };
  useEffect(() => {}, [newTitle]);

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
            <Card.Title>
              <div className="title-wrap">
                <p className={stateDone ? "completed" : "not-completed"}>
                  {newTitle}
                </p>
                <OverlayTrigger
                  placement="top"
                  overlay={<Tooltip id="copy-tooltip">Copy text</Tooltip>}
                >
                  <button
                    onClick={handleCopy}
                    className="btn btn-secondary"
                    data-tip="Copy the text"
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </OverlayTrigger>
              </div>
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
