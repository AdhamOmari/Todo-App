import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, isDoneTodo } from "../../redux/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { writeText } from "clipboard-polyfill";
import Swal from "sweetalert2";
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

import style from "./styles.module.css";
import {
  faCheck,
  faCopy,
  faEdit,
  faSave,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

interface TodoItemProps {
  id: number;
  text: string;
  isDone: boolean;
}

const TodoItem: React.FC<TodoItemProps> = ({ id, text, isDone }) => {
  const [flag, setFlag] = useState<boolean>(false);
  const [newTitle, setNewTitle] = useState<string>(text);
  const dispatch = useDispatch();
  const [stateDone, setStateDone] = useState<boolean>(isDone);

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
    const updatedState = !stateDone;
    setStateDone(updatedState);
    dispatch(isDoneTodo(id, updatedState));

    if (!updatedState) {
      Swal.fire({
        icon: "success",
        title: "Done",
        text: "Todo status is updated successfully",
        background: "#f0f0f0",
      });
    }
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
    <li className={`${style["todo-item"]}`}>
      {flag ? (
        <div className={`${style["save-change"]}`}>
          <input
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            className={`${style["save-change-input"]}`}
          />
          <button
            className={`btn btn-outline-info ${style["save-button"]}`}
            onClick={saveTitle}
          >
            <FontAwesomeIcon icon={faSave} />
          </button>
        </div>
      ) : (
        <>
          <div className={`${style["title-wrap"]}`}>
            <p
              className={`${style["newTitle"]} ${
                !stateDone ? style["not-completed"] : style["completed"]
              }`}
            >
              {newTitle}
            </p>
          </div>
          <div
            className={`${style["button-wrap"]} ${
              stateDone ? style["centered"] : ""
            }`}
          >
            <div>
              <CircleMenu
                startAngle={90}
                rotationAngle={270}
                itemSize={2}
                radius={4}
                rotationAngleInclusive={false}
              >
                <CircleMenuItem tooltip="Edit" className={"customStyles"}>
                  <button
                    onClick={handleEdit}
                    className={`btn btn-warning ${style["button"]}`}
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </button>
                </CircleMenuItem>
                <CircleMenuItem tooltip="Delete" className={"customStyles"}>
                  <button
                    onClick={handleDelete}
                    className={`btn btn-danger ${style["button"]}`}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </CircleMenuItem>
                <CircleMenuItem tooltip="Done" className={"customStyles"}>
                  <button
                    onClick={handelIsDone}
                    className={`btn btn-success ${style["button"]}`}
                  >
                    <FontAwesomeIcon icon={faCheck} />
                  </button>
                </CircleMenuItem>
                <CircleMenuItem tooltip="Copy" className={"customStyles"}>
                  <button
                    onClick={handleCopy}
                    className={`btn btn-secondary ${style["button"]}`}
                  >
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </CircleMenuItem>
              </CircleMenu>
            </div>
          </div>
        </>
      )}
    </li>
  );
};

export default TodoItem;
