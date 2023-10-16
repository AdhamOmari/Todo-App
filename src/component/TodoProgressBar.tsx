import ProgressBar from "react-bootstrap/ProgressBar";

interface TodoProgressBarProps {
  progress: number;
}

const TodoProgressBar = ({ progress }: TodoProgressBarProps) => {
  console.log("✅ progress", progress);

  return (
    <div className="todo-progress-bar-container">
      <div className="todo-progress-label">Todo Done</div>
        <ProgressBar now={progress} style={{ width: "100%" }} />
    </div>
  );
};

export default TodoProgressBar;
