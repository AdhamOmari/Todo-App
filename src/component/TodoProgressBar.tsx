import ProgressBar from "react-bootstrap/ProgressBar";

interface TodoProgressBarProps {
  progress: number;
}

const TodoProgressBar = ({ progress }: TodoProgressBarProps) => {

  return (
    <div className="todo-progress-bar-container">
      <div className="todo-progress-label">Todo Done</div>
      <ProgressBar now={progress} style={{ width: "100%" }}  variant="info" />
    </div>
  );
};

export default TodoProgressBar;
