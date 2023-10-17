import { CircleMenu, CircleMenuItem } from "react-circular-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faTrash,
  faCheck,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";
import style from "./styles.module.css";
interface CustomCircleMenuProps {
  onEdit: () => void;
  onDelete: () => void;
  onDone: () => void;
  onCopy: () => void;
}

const CustomCircleMenu: React.FC<CustomCircleMenuProps> = ({
  onEdit,
  onDelete,
  onDone,
  onCopy,
}) => {
  return (
    <CircleMenu
      startAngle={90}
      rotationAngle={270}
      itemSize={2}
      radius={4}
      rotationAngleInclusive={false}
    >
      <CircleMenuItem
        tooltip="Edit"
        className={"customStyles"}
        style={{ backgroundColor: "#fff", border: "1px solid #000" }}
      >
        <button
          onClick={onEdit}
          className={`btn btn-warning ${style["button"]}`}
        >
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Delete"
        className={"customStyles"}
        style={{ backgroundColor: "#fff", border: "1px solid #000" }}
      >
        <button
          onClick={onDelete}
          className={`btn btn-danger ${style["button"]}`}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Done"
        className={"customStyles"}
        style={{ backgroundColor: "#fff", border: "1px solid #000" }}
      >
        <button
          onClick={onDone}
          className={`btn btn-success ${style["button"]}`}
        >
          <FontAwesomeIcon icon={faCheck} />
        </button>
      </CircleMenuItem>
      <CircleMenuItem
        tooltip="Copy"
        className={"customStyles"}
        style={{ backgroundColor: "#fff", border: "1px solid #000" }}
      >
        <button
          onClick={onCopy}
          className={`btn btn-secondary ${style["button"]}`}
        >
          <FontAwesomeIcon icon={faCopy} />
        </button>
      </CircleMenuItem>
    </CircleMenu>
  );
};

export default CustomCircleMenu;
