import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface TodoProgressBarProps {
  progress: number;
}

const TodoProgressBar = ({ progress }: TodoProgressBarProps) => {
  if (isNaN(progress)) {
    progress = 0;
  }
  return (
    <div className="todo-progress-bar-container">
      <h2 className="todo-progress-label">Todo Done</h2>
      <div style={{ width: "100%", maxWidth: 150 }}>
        <CircularProgressbar value={progress} text={`${progress}%`} />;
      </div>
    </div>
  );
};

export default TodoProgressBar;
