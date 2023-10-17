import "./styles.css";
import MailIcon from "@material-ui/icons/Mail";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MapIcon from "@material-ui/icons/Map";

// Import the circular menu
import { CircleMenu, CircleMenuItem } from "react-circular-menu";

export default function App() {
  return (
    <div style={{ marginTop: "100px", marginLeft: "100px" }}>
      <CircleMenu
        startAngle={90}
        rotationAngle={270}
        itemSize={2}
        radius={4}
        rotationAngleInclusive={false}
      >
        <CircleMenuItem
          onClick={() => alert("Clicked the item")}
          tooltip="Email"
          tooltipPlacement="right"
        >
 <button
                  onClick={handleEdit}
                  className={`btn btn-warning ${style["edit-button"]}`}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>        </CircleMenuItem>
        <CircleMenuItem tooltip="Help">
        <button
                  onClick={handleDelete}
                  className={`btn btn-danger ${style["delete-button"]}`}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>        </CircleMenuItem>
        <CircleMenuItem tooltip="Location" tooltipPlacement="top">
        <button
                  onClick={handelIsDone}
                  className={`btn btn-success ${style["done-button"]}`}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>        </CircleMenuItem>
        <CircleMenuItem tooltip="Location" tooltipPlacement="top">
        <button onClick={handleCopy} className="btn btn-secondary">
                  <FontAwesomeIcon icon={faCopy} />
                </button>       </CircleMenuItem>
        {/* <CircleMenuItem tooltip="Info">
          <MapIcon />
        </CircleMenuItem> */}
      </CircleMenu>
    </div>
  );
}


          <>
                <button
                  onClick={handleEdit}
                  className={`btn btn-warning ${style["edit-button"]}`}
                >
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button
                  onClick={handleDelete}
                  className={`btn btn-danger ${style["delete-button"]}`}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
                <button
                  onClick={handelIsDone}
                  className={`btn btn-success ${style["done-button"]}`}
                >
                  <FontAwesomeIcon icon={faCheck} />
                </button>
                <button onClick={handleCopy} className="btn btn-secondary">
                  <FontAwesomeIcon icon={faCopy} />
                </button>
              </>