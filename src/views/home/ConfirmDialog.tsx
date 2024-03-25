import { Dialog } from "@material-ui/core";
import { FC } from "react";

interface ConfirmationDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const ConfirmationDialog: FC<ConfirmationDialogProps> = ({
  open,
  onClose,
  onConfirm,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: "#f5f5f5",
          boxShadow: "none",
          borderRadius: "15px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "300px",
          position: "relative",
        },
      }}
    >
      <button
        style={{
          position: "absolute",
          right: "10px",
          top: "5px",
          background: "none",
          border: "none",
          fontSize: "1em",
        }}
        onClick={onClose}
      >
        ×
      </button>
      <div style={{ textAlign: "center" }}>
        <h2>Confirmar cambios</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "10px",
          }}
        >
          <button className="event-button" onClick={onConfirm}>
            Confirm
          </button>
          <button className="event-button" onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationDialog;
