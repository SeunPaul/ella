import { useEffect, useState } from "react";
import { PopModalProps } from "./types";
import "./modal.css";

function PopModal({ children, scroll }: PopModalProps) {
  const [showModalCard, setShowModalCard] = useState(false);

  useEffect(() => {
    setShowModalCard(true);
  }, []);

  return (
    <div className="modal pop-modal">
      <div className="modal-background" />
      <div
        className={`modal-card ${showModalCard ? "show" : ""} ${
          scroll ? "scroll" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export default PopModal;
