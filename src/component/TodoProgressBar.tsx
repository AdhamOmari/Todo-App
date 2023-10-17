import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

interface TodoProgressBarProps {
  progress: number;
}

const TodoProgressBar = ({ progress }: TodoProgressBarProps) => {
  if (isNaN(progress)) {
    progress = 0;
  }
  const limitedProgress = Math.min(100, Math.max(0, progress));
  
  const formattedProgress = limitedProgress.toFixed(0);
  return (
    <div className="todo-progress-bar-container">
      <h2 className="todo-progress-label">Todo Done</h2>
      <div style={{ width: "100%", maxWidth: 150 }}>
        <CircularProgressbar value={progress} text={`${formattedProgress}%`} />;
      </div>
    </div>
  );
};

export default TodoProgressBar;
