import { StatusProps } from "./types";
import "./status.css";

function Status({ text, type, color, backgroundColor }: StatusProps) {
  return (
    <div className="status-wrapper">
      <p className={type} style={{ color, backgroundColor }}>
        {text}
      </p>
    </div>
  );
}

export default Status;
