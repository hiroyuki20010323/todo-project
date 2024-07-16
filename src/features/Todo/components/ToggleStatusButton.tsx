// import { useState } from "react";
import "../../../sass/ToggleStatusButton.scss";
// 完了、未完了を変更するコンポーネントs
type ToggleStatusButtonProps = {
  isCompleted: boolean;
  onToggle: (newState: boolean) => void;
};

const ToggleStatusButton: React.FC<ToggleStatusButtonProps> = ({
  isCompleted,
  onToggle,
}) => {
  return (
    <button className="toggule-button" onClick={() => onToggle(!isCompleted)}>
      {isCompleted ? "完了" : "未完了"}
    </button>
  );
};
export default ToggleStatusButton;
